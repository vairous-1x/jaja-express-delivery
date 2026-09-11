import { useI18n, type TranslationKey } from "@/lib/i18n";

const categories: { emoji: string; key: TranslationKey }[] = [
  { emoji: "🍕", key: "categories.pizza" },
  { emoji: "🍔", key: "categories.burgers" },
  { emoji: "🍗", key: "categories.chicken" },
  { emoji: "🥪", key: "categories.sandwich" },
  { emoji: "🍝", key: "categories.pasta" },
  { emoji: "🥗", key: "categories.salads" },
  { emoji: "🍰", key: "categories.desserts" },
  { emoji: "☕", key: "categories.coffee" },
  { emoji: "🛒", key: "categories.groceries" },
  { emoji: "📦", key: "categories.other" },
];

export function Categories() {
  const { t } = useI18n();

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14">
      <h2 className="text-2xl font-extrabold sm:text-3xl">{t("categories.title")}</h2>

      <ul className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-5">
        {categories.map((c) => (
          <li key={c.key}>
            <button
              type="button"
              className="group flex w-full flex-col items-center gap-2 rounded-2xl border border-border bg-card px-2 py-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
            >
              <span className="text-3xl transition-transform group-hover:scale-110">{c.emoji}</span>
              <span className="text-center text-xs font-bold text-foreground sm:text-sm">
                {t(c.key)}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
