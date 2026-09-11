import { Mail, MapPin, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-extrabold sm:text-3xl">{t("contact.title")}</h2>
      <p className="mt-2 text-muted-foreground">{t("contact.subtitle")}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="surface-card p-6">
          <Phone className="size-5 text-primary" />
          <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
            {t("contact.phone")}
          </p>
          <p className="mt-1 text-base font-bold" dir="ltr">
            +216 00 000 000
          </p>
        </div>
        <div className="surface-card p-6">
          <Mail className="size-5 text-primary" />
          <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
            {t("contact.email")}
          </p>
          <p className="mt-1 text-base font-bold" dir="ltr">
            contact@3jaja.tn
          </p>
        </div>
        <div className="surface-card p-6">
          <MapPin className="size-5 text-primary" />
          <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
            {t("contact.zone")}
          </p>
          <p className="mt-1 text-base font-bold">{t("contact.zoneValue")}</p>
        </div>
      </div>
    </section>
  );
}
