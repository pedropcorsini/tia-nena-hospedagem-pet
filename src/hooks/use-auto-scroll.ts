"use client";

import { useEffect, useRef } from "react";

const RESUME_DELAY_MS = 2500;

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

    // scrollLeft is clamped to >= 0 by the browser, so a negative direction
    // must start past zero and wrap at <= 0 (not < 0) or it gets stuck at 0.
    if (direction === -1 && scroller.scrollLeft <= 0) {
      scroller.scrollLeft = scroller.scrollWidth / 2;
    }

    function wrapScrollPosition() {
      if (!scroller) return;
      const singleSetWidth = scroller.scrollWidth / 2;
      if (scroller.scrollLeft >= singleSetWidth) {
        scroller.scrollLeft -= singleSetWidth;
      } else if (scroller.scrollLeft <= 0) {
        scroller.scrollLeft += singleSetWidth;
      }
    }

    function tick(timestamp: number) {
      if (!scroller) return;
      if (lastTimestamp === null) lastTimestamp = timestamp;
      const deltaSeconds = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      if (!isPausedRef.current && !isDraggingRef.current && !reducedMotionRef.current) {
        scroller.scrollLeft += direction * speedPxPerSec * deltaSeconds;
        wrapScrollPosition();
      }

      frameId = requestAnimationFrame(tick);
    }

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [direction, speedPxPerSec]);

  function pauseAutoplay() {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    isPausedRef.current = true;
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
