import { cn } from "@/lib/utils";
import logo from "@/assets/logo-3jaja.png";

type LogoProps = {
  className?: string;
  /** Render the wordmark in light ink for dark/brand backgrounds. */
  onBrand?: boolean;
  showWordmark?: boolean;
};

export function Logo({ className, onBrand = false, showWordmark = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <img
        src={logo}
        alt=""
        width={512}
        height={512}
        className="h-9 w-9 shrink-0 object-contain"
      />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "text-lg font-extrabold tracking-tight",
              onBrand ? "text-primary-foreground" : "text-primary",
            )}
          >
            3jaja
          </span>
          <span
            className={cn(
              "text-[0.62rem] font-bold uppercase tracking-[0.22em]",
              onBrand ? "text-accent" : "text-accent-foreground/70",
            )}
          >
            Delivery
          </span>
        </span>
      )}
    </span>
  );
}
