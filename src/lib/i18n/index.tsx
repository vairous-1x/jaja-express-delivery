import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLocale,
  localeMeta,
  locales,
  messages,
  type Locale,
  type TranslationKey,
} from "./translations";

const STORAGE_KEY = "3jaja.locale";

type I18nValue = {
  locale: Locale;
  dir: "rtl" | "ltr";
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
  /** Inline translation for screen-local copy: pick({ ar, fr, en }). */
  pick: (text: { ar: string; fr: string; en: string }) => string;
};

const I18nContext = createContext<I18nValue | null>(null);

function isLocale(value: string | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  // Read the stored preference after hydration so SSR markup stays stable.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored) && stored !== locale) setLocaleState(stored);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dir = localeMeta[locale].dir;

  useEffect(() => {
    const html = document.documentElement;
    html.lang = localeMeta[locale].htmlLang;
    html.dir = dir;
  }, [locale, dir]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const t = useCallback(
    (key: TranslationKey) => messages[locale][key] ?? messages[defaultLocale][key] ?? key,
    [locale],
  );

  const pick = useCallback((text: { ar: string; fr: string; en: string }) => text[locale], [locale]);

  const value = useMemo<I18nValue>(
    () => ({ locale, dir, setLocale, t, pick }),
    [locale, dir, setLocale, t, pick],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}

export { locales, localeMeta, defaultLocale };
export type { Locale, TranslationKey };
