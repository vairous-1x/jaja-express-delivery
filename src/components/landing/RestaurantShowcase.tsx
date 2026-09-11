import { Bike, Clock, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { demoRestaurants } from "@/lib/demo/restaurants";
import { useI18n } from "@/lib/i18n";

function formatTnd(value: number, locale: string) {
  return `${value.toLocaleString(locale === "ar" ? "ar-TN" : locale, {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  })} TND`;
}

export function RestaurantShowcase() {
  const { t, locale } = useI18n();

  return (
    <section id="restaurants" className="bg-secondary/60 py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">{t("restaurants.title")}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{t("restaurants.subtitle")}</p>
          </div>
          <Badge variant="secondary" className="rounded-full">
            {t("restaurants.demo")}
          </Badge>
        </div>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {demoRestaurants.map((r) => (
            <li key={r.id} className="surface-card overflow-hidden">
              <div className="relative">
                <img
                  src={r.image}
                  alt={r.name}
                  loading="lazy"
                  width={900}
                  height={700}
                  className="h-40 w-full object-cover"
                />
                <span
                  className={`absolute start-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${
                    r.isOpen
                      ? "bg-success text-success-foreground"
                      : "bg-foreground/80 text-background"
                  }`}
                >
                  {r.isOpen ? t("restaurants.open") : t("restaurants.closed")}
                </span>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="truncate text-base font-bold">{r.name}</h3>
                  <span className="flex shrink-0 items-center gap-1 text-sm font-bold text-accent-foreground">
                    <Star className="size-4 fill-accent text-accent" />
                    {r.rating}
                  </span>
                </div>

                <p className="mt-1 text-sm text-muted-foreground">
                  {r.cuisines.join(" • ")} · {r.distanceKm} km
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-3.5" />
                    {r.minMinutes}-{r.maxMinutes} {t("restaurants.minutes")}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Bike className="size-3.5" />
                    {formatTnd(r.deliveryFee, locale)}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
