import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  // light = for dark backgrounds (gold + white). dark = for light backgrounds (navy + gold)
  const word = variant === "light" ? "text-navy-foreground" : "text-navy";
  return (
    <span className={cn("inline-flex items-baseline gap-1.5 font-display font-extrabold tracking-tight", className)}>
      <span className={cn("text-2xl leading-none", word)}>
        G<span className="text-gold">3</span>STION
      </span>
      <span className="rounded-[4px] bg-gold px-1 py-0.5 text-[0.6rem] font-bold uppercase leading-none text-gold-foreground">
        s.a.s
      </span>
    </span>
  );
}
