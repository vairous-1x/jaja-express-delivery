import { Link } from "@tanstack/react-router";
import { Bike, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export function Partners() {
  const { t } = useI18n();

  return (
    <section id="partners" className="mx-auto w-full max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-extrabold sm:text-3xl">{t("partners.title")}</h2>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <article className="rounded-4xl brand-gradient p-8 text-primary-foreground shadow-brand">
          <Store className="size-8 text-accent" />
          <h3 className="mt-4 text-xl font-extrabold">{t("partners.restaurant.title")}</h3>
          <p className="mt-2 text-sm text-primary-foreground/85">{t("partners.restaurant.text")}</p>
          <Button variant="accent" size="lg" className="mt-6 rounded-xl font-bold" asChild>
            <Link to="/join-restaurant">{t("cta.joinRestaurant")}</Link>
          </Button>
        </article>

        <article className="rounded-4xl border-2 border-accent/50 bg-card p-8">
          <Bike className="size-8 text-primary" />
          <h3 className="mt-4 text-xl font-extrabold">{t("partners.driver.title")}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{t("partners.driver.text")}</p>
          <Button variant="hero" size="lg" className="mt-6 rounded-xl font-bold" asChild>
            <Link to="/join-driver">{t("cta.joinDriver")}</Link>
          </Button>
        </article>
      </div>
    </section>
  );
}
