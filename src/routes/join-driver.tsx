import { createFileRoute } from "@tanstack/react-router";
import { Bike, CalendarClock, MapPinned, Wallet } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Contact } from "@/components/landing/Contact";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/join-driver")({
  head: () => ({
    meta: [
      { title: "Devenir livreur — 3jaja Delivery" },
      {
        name: "description",
        content:
          "Devenez livreur 3jaja Delivery : horaires flexibles, courses régulières dans votre zone et paiement à chaque livraison.",
      },
      { property: "og:title", content: "Devenir livreur — 3jaja Delivery" },
      {
        property: "og:description",
        content: "إنضم كسائق إلى 3jaja Delivery وخدم بالوقت اللي يناسبك.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JoinDriverPage,
});

function JoinDriverPage() {
  const { t } = useI18n();

  const perks = [
    { icon: Bike, text: t("partners.driver.text") },
    { icon: CalendarClock, text: t("how.step3.text") },
    { icon: MapPinned, text: t("why.fast.text") },
    { icon: Wallet, text: t("why.pay.text") },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="accent-gradient py-14 text-accent-foreground">
          <div className="mx-auto w-full max-w-3xl px-4">
            <h1 className="text-3xl font-extrabold sm:text-4xl">{t("cta.joinDriver")}</h1>
            <p className="mt-3 font-semibold">{t("partners.driver.title")}</p>
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
