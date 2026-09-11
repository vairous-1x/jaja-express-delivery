import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2">
          <Logo onBrand />
          <p className="mt-4 max-w-xs text-sm text-sidebar-foreground/75">
            {t("brand.tagline")}
          </p>
          <p className="mt-2 text-sm text-sidebar-foreground/60">{t("footer.tagline")}</p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-sidebar-primary">
            {t("nav.restaurants")}
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-sidebar-foreground/75">
            <li>
              <Link to="/join-restaurant" className="hover:text-sidebar-primary">
                {t("cta.joinRestaurant")}
              </Link>
            </li>
            <li>
              <a href="#restaurants" className="hover:text-sidebar-primary">
                {t("restaurants.title")}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-sidebar-primary">
            {t("nav.drivers")}
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-sidebar-foreground/75">
            <li>
              <Link to="/join-driver" className="hover:text-sidebar-primary">
                {t("cta.joinDriver")}
              </Link>
            </li>
            <li>
              <a href="#faq" className="hover:text-sidebar-primary">
                {t("nav.faq")}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-sidebar-primary">
                {t("nav.contact")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sidebar-border px-4 py-5 text-center text-xs text-sidebar-foreground/60">
        © {year} 3jaja Delivery — {t("footer.rights")}
      </div>
    </footer>
  );
}
