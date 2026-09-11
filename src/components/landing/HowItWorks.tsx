import { MapPin, ShoppingBag, Truck } from "lucide-react";
import { useI18n, type TranslationKey } from "@/lib/i18n";

const steps: {
  icon: typeof MapPin;
  title: TranslationKey;
  text: TranslationKey;
}[] = [
  { icon: MapPin, title: "how.step1.title", text: "how.step1.text" },
  { icon: ShoppingBag, title: "how.step2.title", text: "how.step2.text" },
  { icon: Truck, title: "how.step3.title", text: "how.step3.text" },
];

export function HowItWorks() {
  const { t } = useI18n();

  return (
    <section id="how" className="bg-secondary/60 py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <h2 className="text-2xl font-extrabold sm:text-3xl">{t("how.title")}</h2>
        <p className="mt-2 text-muted-foreground">{t("how.subtitle")}</p>

        <ol className="mt-8 grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="surface-card relative p-6">
              <span className="absolute end-5 top-5 text-4xl font-extrabold text-primary/10">
                {i + 1}
              </span>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <step.icon className="size-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{t(step.title)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t(step.text)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
