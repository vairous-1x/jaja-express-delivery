import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/landing/Hero";
import { Categories } from "@/components/landing/Categories";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { WhyUs } from "@/components/landing/WhyUs";
import { RestaurantShowcase } from "@/components/landing/RestaurantShowcase";
import { Partners } from "@/components/landing/Partners";
import { Faq } from "@/components/landing/Faq";
import { Contact } from "@/components/landing/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "3jaja Delivery — أسرع خدمة توصيل أكل في منطقتك" },
      {
        name: "description",
        content:
          "3jaja Delivery: livraison de repas, courses et petites commissions en Tunisie. Commandez en quelques clics et suivez votre livreur en direct.",
      },
      { property: "og:title", content: "3jaja Delivery — أسرع خدمة توصيل أكل في منطقتك" },
      {
        property: "og:description",
        content: "كلي ما تحب، يوصلك لدارك ❤️ — مطاعم، قضيان وتوصيل سريع في تونس.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Categories />
        <HowItWorks />
        <WhyUs />
        <RestaurantShowcase />
        <Partners />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
