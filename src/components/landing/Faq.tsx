import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useI18n, type TranslationKey } from "@/lib/i18n";

const faqs: { q: TranslationKey; a: TranslationKey }[] = [
  { q: "faq.q1", a: "faq.a1" },
  { q: "faq.q2", a: "faq.a2" },
  { q: "faq.q3", a: "faq.a3" },
  { q: "faq.q4", a: "faq.a4" },
];

export function Faq() {
  const { t } = useI18n();

  return (
    <section id="faq" className="bg-secondary/60 py-16">
      <div className="mx-auto w-full max-w-3xl px-4">
        <h2 className="text-2xl font-extrabold sm:text-3xl">{t("faq.title")}</h2>

        <Accordion type="single" collapsible className="mt-6">
          {faqs.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger className="text-start text-base font-bold">
                {t(item.q)}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {t(item.a)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
