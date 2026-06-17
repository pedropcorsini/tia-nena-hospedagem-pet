import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "mx-0 text-left",
      )}
    >
      <p
        className={cn(
          "font-heading text-xs font-extrabold uppercase tracking-[0.22em]",
          tone === "light" ? "text-honey" : "text-ink/70",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-3 font-heading text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl",
          tone === "light" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-8 sm:text-lg",
            tone === "light" ? "text-white/68" : "text-ink/68",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
