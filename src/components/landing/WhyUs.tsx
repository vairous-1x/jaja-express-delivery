import { Banknote, Flag, Rocket, Satellite } from "lucide-react";
import { useI18n, type TranslationKey } from "@/lib/i18n";

const items: { icon: typeof Rocket; title: TranslationKey; text: TranslationKey }[] = [
  { icon: Rocket, title: "why.fast.title", text: "why.fast.text" },
  { icon: Satellite, title: "why.track.title", text: "why.track.text" },
  { icon: Banknote, title: "why.pay.title", text: "why.pay.text" },
  { icon: Flag, title: "why.local.title", text: "why.local.text" },
];

export function WhyUs() {
  const { t } = useI18n();

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-extrabold sm:text-3xl">{t("why.title")}</h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-card"
          >
            <span className="flex size-11 items-center justify-center rounded-xl accent-gradient text-accent-foreground">
              <item.icon className="size-5" />
            </span>
            <h3 className="mt-4 text-base font-bold">{t(item.title)}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(item.text)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
