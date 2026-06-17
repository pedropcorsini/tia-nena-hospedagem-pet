import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "mx-0 text-left",
      )}
    >
      <p className="font-heading text-xs font-extrabold uppercase tracking-[0.22em] text-tomato">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-heading text-3xl font-black tracking-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-ink/68 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
