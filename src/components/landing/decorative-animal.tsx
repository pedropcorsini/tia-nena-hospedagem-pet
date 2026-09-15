import Image from "next/image";

import { cn } from "@/lib/utils";

export type DecorativeAnimalProps = {
  src: string;
  alt: string;
  positionClassName: string;
  widthClassName?: string;
  objectPositionClassName?: string;
  layer?: "front" | "back";
  flip?: boolean;
  glow?: boolean;
  rotateClassName?: string;
};

export function DecorativeAnimal({
  src,
  alt,
  positionClassName,
  widthClassName = "w-[320px] xl:w-[380px]",
  objectPositionClassName = "object-bottom",
  layer = "front",
  flip = false,
  glow = true,
  rotateClassName = "",
}: DecorativeAnimalProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute top-0 hidden lg:block",
        layer === "front" ? "z-10" : "-z-10",
        widthClassName,
        positionClassName,
        rotateClassName,
      )}
    >
      {glow ? (
        <div
          aria-hidden
          className="absolute bottom-0 left-1/2 h-1/2 w-1/2 -translate-x-1/2 rounded-full bg-honey/10 blur-3xl"
        />
      ) : null}
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("object-contain drop-shadow-2xl", objectPositionClassName, flip && "-scale-x-100")}
        sizes="380px"
      />
    </div>
  );
}
