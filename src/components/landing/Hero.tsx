import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import hero from "@/assets/hero-rider.jpg";

export function Hero() {
  const { t, dir } = useI18n();

  return (
    <section className="relative overflow-hidden brand-gradient">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 end-[-6rem] h-72 w-72 rounded-full bg-accent/25 blur-3xl"
      />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div className="text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-bold text-accent-foreground">
            <Timer className="size-4" />
            {t("hero.badge")}
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl md:text-[3.4rem]">
            {t("hero.title")}
          </h1>

          <p className="mt-4 max-w-lg text-base text-primary-foreground/85 sm:text-lg">
            {t("hero.subtitle")}
          </p>

          <p className="mt-3 text-lg font-bold text-accent">{t("brand.tagline")}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button variant="accent" size="xl" className="gap-2">
              {t("cta.order")}
              <ArrowRight className={dir === "rtl" ? "rotate-180" : ""} />
            </Button>
            <Button variant="onBrand" size="xl" asChild>
              <Link to="/join-restaurant">{t("cta.joinRestaurant")}</Link>
            </Button>
          </div>

          <dl className="mt-9 grid max-w-md grid-cols-3 gap-4 border-t border-primary-foreground/20 pt-6">
            {[
              { value: "20+", label: t("hero.stat.restaurants") },
              { value: "25-45 min", label: t("hero.stat.time") },
              { value: "6", label: t("hero.stat.zones") },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-xl font-extrabold text-accent">{stat.value}</dt>
                <dd className="mt-1 text-xs text-primary-foreground/75">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <img
            src={hero}
            alt={t("hero.title")}
            width={1280}
            height={1600}
            className="mx-auto w-full max-w-md rounded-4xl object-cover shadow-brand"
          />
          <div className="absolute bottom-4 start-2 flex items-center gap-2 rounded-2xl bg-card px-4 py-3 shadow-card">
            <MapPin className="size-5 text-primary" />
            <div className="text-start">
              <p className="text-xs text-muted-foreground">{t("contact.zone")}</p>
              <p className="text-sm font-bold text-foreground">{t("contact.zoneValue")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
