"use client";

import { useEffect, useRef } from "react";

const RESUME_DELAY_MS = 2500;
const PAUSE_SAFETY_TIMEOUT_MS = 4000;

type UseAutoScrollOptions = {
  speedPxPerSec: number;
  direction?: 1 | -1;
};

export function useAutoScroll({ speedPxPerSec, direction = 1 }: UseAutoScrollOptions) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mediaQuery.matches;
    const handleChange = (event: MediaQueryListEvent) => {
      reducedMotionRef.current = event.matches;
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let frameId: number;
    let lastTimestamp: number | null = null;

    // WebKit (iOS Safari and, on iOS, every other browser too — they all
    // share the same engine) truncates scrollLeft to an integer. Reading it
    // back each frame and adding a sub-pixel delta (~0.47px at 60fps for a
    // 28px/s speed) rounds straight back to the same integer forever when
    // incrementing, while decrementing always drops by a whole pixel — so a
    // positive direction would silently freeze while negative kept working.
    // Tracking position as our own float and only ever writing it (never
    // reading it back to accumulate) avoids the truncation entirely.
    let position = direction === -1 ? scroller.scrollWidth / 2 : 0;
    scroller.scrollLeft = position;

    function wrapPosition(pos: number, singleSetWidth: number) {
      if (singleSetWidth <= 0) return pos;
      const wrapped = pos % singleSetWidth;
      return wrapped < 0 ? wrapped + singleSetWidth : wrapped;
    }

    function tick(timestamp: number) {
      if (!scroller) return;
      if (lastTimestamp === null) lastTimestamp = timestamp;
      const deltaSeconds = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      if (isPausedRef.current || isDraggingRef.current) {
        // Stay in sync with manual scrolling/dragging so autoplay resumes
        // from wherever the user left it instead of jumping.
        position = scroller.scrollLeft;
      } else if (!reducedMotionRef.current) {
        position = wrapPosition(position + direction * speedPxPerSec * deltaSeconds, scroller.scrollWidth / 2);
        scroller.scrollLeft = position;
      }

      frameId = requestAnimationFrame(tick);
    }

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [direction, speedPxPerSec]);

  function pauseAutoplay() {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    isPausedRef.current = true;
    // Safety net: some mobile browsers don't reliably fire the matching
    // touchend/touchcancel/pointerleave for every gesture (e.g. a page-scroll
    // that starts over the row), which would otherwise leave it paused
    // forever. This guarantees it always resumes on its own.
    resumeTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, PAUSE_SAFETY_TIMEOUT_MS);
  }

  function scheduleResume() {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, RESUME_DELAY_MS);
  }

  function scrollByPage(pageDirection: 1 | -1) {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    pauseAutoplay();
    scroller.scrollBy({ left: pageDirection * scroller.clientWidth * 0.9, behavior: "smooth" });
    scheduleResume();
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    const scroller = scrollerRef.current;
    if (!scroller) return;
    isDraggingRef.current = true;
    pauseAutoplay();
    dragStartXRef.current = event.clientX;
    dragStartScrollLeftRef.current = scroller.scrollLeft;
    scroller.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!isDraggingRef.current) return;
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.scrollLeft = dragStartScrollLeftRef.current - (event.clientX - dragStartXRef.current);
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    isDraggingRef.current = false;
    scrollerRef.current?.releasePointerCapture(event.pointerId);
    scheduleResume();
  }

  // Mouse-only hover pause. Plain onMouseEnter/onMouseLeave must NOT be used
  // here: iOS Safari replays synthetic mouse events after a tap, and the
  // matching "leave" doesn't reliably fire, permanently pausing the row.
  // Pointer events carry pointerType, so we can filter touch out explicitly.
  function handlePointerEnter(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    pauseAutoplay();
  }

  return {
    scrollerRef,
    pauseAutoplay,
    scheduleResume,
    scrollByPage,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handlePointerEnter,
  };
}
