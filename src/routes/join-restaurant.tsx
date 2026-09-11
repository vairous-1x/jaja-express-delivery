import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Store, Utensils, Wallet } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Contact } from "@/components/landing/Contact";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/join-restaurant")({
  head: () => ({
    meta: [
      { title: "Devenir restaurant partenaire — 3jaja Delivery" },
      {
        name: "description",
        content:
          "Rejoignez 3jaja Delivery comme restaurant partenaire : nouvelles commandes, tableau de bord simple et livreurs dédiés en Tunisie.",
      },
      { property: "og:title", content: "Devenir restaurant partenaire — 3jaja Delivery" },
      {
        property: "og:description",
        content: "إنضم كمطعم إلى 3jaja Delivery وزيد مبيعاتك في منطقتك.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JoinRestaurantPage,
});

function JoinRestaurantPage() {
  const { t } = useI18n();

  const perks = [
    { icon: Store, text: t("partners.restaurant.text") },
    { icon: Utensils, text: t("why.fast.text") },
    { icon: BarChart3, text: t("why.track.text") },
    { icon: Wallet, text: t("why.pay.text") },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="brand-gradient py-14 text-primary-foreground">
          <div className="mx-auto w-full max-w-3xl px-4">
            <h1 className="text-3xl font-extrabold sm:text-4xl">{t("cta.joinRestaurant")}</h1>
            <p className="mt-3 text-primary-foreground/85">{t("partners.restaurant.title")}</p>
          </div>
        </section>

        <div className="mx-auto grid w-full max-w-3xl gap-4 px-4 py-12 sm:grid-cols-2">
          {perks.map((p, i) => (
            <div key={i} className="surface-card p-6">
              <p.icon className="size-6 text-primary" />
              <p className="mt-3 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>

        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
