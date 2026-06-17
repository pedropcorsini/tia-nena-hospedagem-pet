import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-heading text-sm font-extrabold tracking-tight transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "border-2 border-honey bg-honey text-ink shadow-[0_12px_26px_rgba(232,168,0,0.24)] hover:border-[#d69800] hover:bg-[#d69800]",
        accent:
          "border-2 border-honey bg-honey text-ink shadow-[0_12px_26px_rgba(232,168,0,0.24)] hover:border-[#d69800] hover:bg-[#d69800]",
        outline:
          "border-2 border-ink/15 bg-white text-ink hover:border-honey/70 hover:bg-honey/12",
        ghost: "border-2 border-transparent text-ink hover:bg-ink/5",
      },
      size: {
        md: "h-11 px-5",
        lg: "h-12 px-7 text-base",
        sm: "h-9 px-4 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
