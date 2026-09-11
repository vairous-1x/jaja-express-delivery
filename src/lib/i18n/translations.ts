export const locales = ["ar", "fr", "en"] as const;
export type Locale = (typeof locales)[number];

export const localeMeta: Record<Locale, { label: string; dir: "rtl" | "ltr"; htmlLang: string }> = {
  ar: { label: "العربية", dir: "rtl", htmlLang: "ar" },
  fr: { label: "Français", dir: "ltr", htmlLang: "fr" },
  en: { label: "English", dir: "ltr", htmlLang: "en" },
};

export const defaultLocale: Locale = "ar";

/**
 * Flat translation keys, namespaced by screen/domain.
 * Arabic is the source of truth; FR/EN are full translations, not partial.
 */
export const messages = {
  ar: {
    "brand.name": "3jaja Delivery",
    "brand.tagline": "كلي ما تحب، يوصلك لدارك ❤️",

    "nav.home": "الرئيسية",
    "nav.how": "كيفاش يخدم",
    "nav.restaurants": "المطاعم",
    "nav.drivers": "السائقين",
    "nav.faq": "أسئلة شائعة",
    "nav.contact": "اتصل بنا",
    "nav.language": "اللغة",

    "cta.order": "إطلب الآن",
    "cta.joinRestaurant": "إنضم كمطعم",
    "cta.joinDriver": "إنضم كسائق",
    "cta.explore": "شوف المطاعم",

    "hero.title": "أسرع خدمة توصيل أكل في منطقتك",
    "hero.subtitle":
      "مطاعم، فاست فود، قهاوي، وحتى قضيان الدار — تختار من تليفونك و3jaja توصلك في دقائق.",
    "hero.badge": "توصيل من 25 دقيقة",
    "hero.stat.restaurants": "مطعم شريك",
    "hero.stat.time": "معدل التوصيل",
    "hero.stat.zones": "منطقة تغطية",

    "how.title": "كيفاش يخدم 3jaja؟",
    "how.subtitle": "ثلاث خطوات وبرك.",
    "how.step1.title": "اختار موقعك",
    "how.step1.text": "حدد عنوانك على الخريطة ولا اختار عنوان محفوظ.",
    "how.step2.title": "اختار أكلتك",
    "how.step2.text": "تفرج على المطاعم القريبة منك، زيد الإضافات اللي تحبها.",
    "how.step3.title": "تبع طلبك",
    "how.step3.text": "شوف السائق يتحرك على الخريطة حتى يوصلك لباب دارك.",

    "why.title": "علاش 3jaja؟",
    "why.fast.title": "توصيل سريع",
    "why.fast.text": "نظام توزيع ذكي يختار أقرب سائق متوفر لكل طلب.",
    "why.track.title": "تتبع مباشر",
    "why.track.text": "حالة الطلب تتبدل وقتها، بلا ما تعاود تفتح الصفحة.",
    "why.pay.title": "خلاص كيما تحب",
    "why.pay.text": "نقدا عند التوصيل، ولا خلاص أونلاين كي يتوفر.",
    "why.local.title": "تونسي 100%",
    "why.local.text": "بالعربي، بالفرنساوي، وبالإنجليزي — وبأسعار بالدينار.",

    "categories.title": "شنوة تحب تاكل اليوم؟",
    "categories.pizza": "بيتزا",
    "categories.burgers": "برغر",
    "categories.chicken": "دجاج",
    "categories.sandwich": "كاسكروت",
    "categories.pasta": "مقرونة",
    "categories.salads": "سلاطة",
    "categories.desserts": "حلويات",
    "categories.coffee": "قهوة",
    "categories.groceries": "قضيان",
    "categories.other": "خدمات أخرى",

    "restaurants.title": "مطاعم مشهورة",
    "restaurants.subtitle": "نماذج تجريبية باش تشوف كيفاش تظهر المطاعم.",
    "restaurants.demo": "بيانات تجريبية",
    "restaurants.minutes": "دقيقة",
    "restaurants.delivery": "توصيل",
    "restaurants.open": "مفتوح",
    "restaurants.closed": "مسكّر",

    "partners.title": "خدم معنا",
    "partners.restaurant.title": "عندك مطعم؟",
    "partners.restaurant.text": "زيد مبيعاتك وأوصل لعملاء جدد في منطقتك، بلوحة تحكم بسيطة.",
    "partners.driver.title": "تحب تخدم كسائق؟",
    "partners.driver.text": "خدم بالوقت اللي يناسبك واخلص على كل توصيل.",

    "faq.title": "أسئلة شائعة",
    "faq.q1": "قداش وقت التوصيل؟",
    "faq.a1": "عادة بين 25 و45 دقيقة، على حساب المطعم والمسافة.",
    "faq.q2": "كيفاش نخلص؟",
    "faq.a2": "نقدا عند التوصيل. الخلاص الأونلاين جاي في المرحلة الجاية.",
    "faq.q3": "شنوة المناطق المغطاة؟",
    "faq.a3": "نبداو بجربة والمناطق المجاورة، والمناطق تتزاد من لوحة الإدارة.",
    "faq.q4": "نجم نطلب حاجة ماهيش أكل؟",
    "faq.a4": "إيه، 3jaja تدعم القضيان: قضيان دار، وثائق، وشراء من الحوانت.",

    "contact.title": "اتصل بنا",
    "contact.subtitle": "فريقنا موجود باش يعاونك.",
    "contact.phone": "الهاتف",
    "contact.email": "البريد الإلكتروني",
    "contact.zone": "منطقة الخدمة",
    "contact.zoneValue": "جربة والمناطق المجاورة، تونس",

    "footer.rights": "جميع الحقوق محفوظة",
    "footer.tagline": "منصة توصيل تونسية.",
  },

  fr: {
    "brand.name": "3jaja Delivery",
    "brand.tagline": "Mangez ce que vous aimez, livré chez vous ❤️",

    "nav.home": "Accueil",
    "nav.how": "Comment ça marche",
    "nav.restaurants": "Restaurants",
    "nav.drivers": "Livreurs",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.language": "Langue",

    "cta.order": "Commander",
    "cta.joinRestaurant": "Devenir partenaire",
    "cta.joinDriver": "Devenir livreur",
    "cta.explore": "Voir les restaurants",

    "hero.title": "La livraison de repas la plus rapide de votre région",
    "hero.subtitle":
      "Restaurants, fast-food, cafés et même vos courses — commandez depuis votre téléphone, 3jaja livre en quelques minutes.",
    "hero.badge": "Livraison dès 25 min",
    "hero.stat.restaurants": "restaurants partenaires",
    "hero.stat.time": "délai moyen",
    "hero.stat.zones": "zones couvertes",

    "how.title": "Comment fonctionne 3jaja ?",
    "how.subtitle": "Trois étapes, c'est tout.",
    "how.step1.title": "Choisissez votre adresse",
    "how.step1.text": "Placez un point sur la carte ou utilisez une adresse enregistrée.",
    "how.step2.title": "Choisissez votre repas",
    "how.step2.text": "Parcourez les restaurants proches et ajoutez vos suppléments.",
    "how.step3.title": "Suivez la livraison",
    "how.step3.text": "Voyez votre livreur avancer sur la carte jusqu'à votre porte.",

    "why.title": "Pourquoi 3jaja ?",
    "why.fast.title": "Livraison rapide",
    "why.fast.text": "Une répartition intelligente choisit le livreur le plus proche.",
    "why.track.title": "Suivi en direct",
    "why.track.text": "Le statut se met à jour tout seul, sans rafraîchir la page.",
    "why.pay.title": "Paiement flexible",
    "why.pay.text": "Espèces à la livraison, paiement en ligne bientôt disponible.",
    "why.local.title": "100% tunisien",
    "why.local.text": "En arabe, français et anglais — et en dinars.",

    "categories.title": "Qu'est-ce qui vous ferait plaisir ?",
    "categories.pizza": "Pizza",
    "categories.burgers": "Burgers",
    "categories.chicken": "Poulet",
    "categories.sandwich": "Sandwich",
    "categories.pasta": "Pâtes",
    "categories.salads": "Salades",
    "categories.desserts": "Desserts",
    "categories.coffee": "Café",
    "categories.groceries": "Courses",
    "categories.other": "Autres",

    "restaurants.title": "Restaurants populaires",
    "restaurants.subtitle": "Exemples de démonstration pour illustrer l'affichage.",
    "restaurants.demo": "Données de démo",
    "restaurants.minutes": "min",
    "restaurants.delivery": "livraison",
    "restaurants.open": "Ouvert",
    "restaurants.closed": "Fermé",

    "partners.title": "Travaillez avec nous",
    "partners.restaurant.title": "Vous avez un restaurant ?",
    "partners.restaurant.text":
      "Augmentez vos ventes et touchez de nouveaux clients avec un tableau de bord simple.",
    "partners.driver.title": "Envie de livrer ?",
    "partners.driver.text": "Travaillez quand vous voulez et gagnez à chaque course.",

    "faq.title": "Questions fréquentes",
    "faq.q1": "Combien de temps prend une livraison ?",
    "faq.a1": "En général entre 25 et 45 minutes selon le restaurant et la distance.",
    "faq.q2": "Comment payer ?",
    "faq.a2": "En espèces à la livraison. Le paiement en ligne arrive à la phase suivante.",
    "faq.q3": "Quelles zones sont couvertes ?",
    "faq.a3": "Nous démarrons à Djerba et ses environs ; les zones sont ajoutées depuis l'administration.",
    "faq.q4": "Peut-on commander autre chose que des repas ?",
    "faq.a4": "Oui : courses, documents et achats en boutique sont pris en charge.",

    "contact.title": "Contact",
    "contact.subtitle": "Notre équipe est là pour vous aider.",
    "contact.phone": "Téléphone",
    "contact.email": "E-mail",
    "contact.zone": "Zone de service",
    "contact.zoneValue": "Djerba et environs, Tunisie",

    "footer.rights": "Tous droits réservés",
    "footer.tagline": "Plateforme de livraison tunisienne.",
  },

  en: {
    "brand.name": "3jaja Delivery",
    "brand.tagline": "Eat what you love, delivered to your door ❤️",

    "nav.home": "Home",
    "nav.how": "How it works",
    "nav.restaurants": "Restaurants",
    "nav.drivers": "Drivers",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.language": "Language",

    "cta.order": "Order now",
    "cta.joinRestaurant": "Join as restaurant",
    "cta.joinDriver": "Join as driver",
    "cta.explore": "Browse restaurants",

    "hero.title": "The fastest food delivery in your area",
    "hero.subtitle":
      "Restaurants, fast food, cafés and even your errands — order from your phone and 3jaja delivers in minutes.",
    "hero.badge": "Delivery from 25 min",
    "hero.stat.restaurants": "partner restaurants",
    "hero.stat.time": "average delivery",
    "hero.stat.zones": "covered zones",

    "how.title": "How 3jaja works",
    "how.subtitle": "Three steps, that's it.",
    "how.step1.title": "Set your location",
    "how.step1.text": "Drop a pin on the map or pick a saved address.",
    "how.step2.title": "Pick your meal",
    "how.step2.text": "Browse nearby restaurants and add the extras you want.",
    "how.step3.title": "Track your order",
    "how.step3.text": "Watch your driver move on the map right to your door.",

    "why.title": "Why 3jaja",
    "why.fast.title": "Fast delivery",
    "why.fast.text": "Smart dispatch picks the closest available driver for every order.",
    "why.track.title": "Live tracking",
    "why.track.text": "Status updates arrive on their own — no refreshing.",
    "why.pay.title": "Flexible payment",
    "why.pay.text": "Cash on delivery today, online payment coming next.",
    "why.local.title": "100% Tunisian",
    "why.local.text": "Arabic, French and English — priced in dinars.",

    "categories.title": "What are you craving today?",
    "categories.pizza": "Pizza",
    "categories.burgers": "Burgers",
    "categories.chicken": "Chicken",
    "categories.sandwich": "Sandwich",
    "categories.pasta": "Pasta",
    "categories.salads": "Salads",
    "categories.desserts": "Desserts",
    "categories.coffee": "Coffee",
    "categories.groceries": "Groceries",
    "categories.other": "Other",

    "restaurants.title": "Popular restaurants",
    "restaurants.subtitle": "Demo examples showing how listings appear.",
    "restaurants.demo": "Demo data",
    "restaurants.minutes": "min",
    "restaurants.delivery": "delivery",
    "restaurants.open": "Open",
    "restaurants.closed": "Closed",

    "partners.title": "Work with us",
    "partners.restaurant.title": "Own a restaurant?",
    "partners.restaurant.text":
      "Grow your sales and reach new customers with a simple dashboard.",
    "partners.driver.title": "Want to deliver?",
    "partners.driver.text": "Work on your own schedule and earn on every delivery.",

    "faq.title": "Frequently asked questions",
    "faq.q1": "How long does delivery take?",
    "faq.a1": "Usually 25 to 45 minutes depending on the restaurant and distance.",
    "faq.q2": "How do I pay?",
    "faq.a2": "Cash on delivery. Online payment arrives in the next phase.",
    "faq.q3": "Which areas are covered?",
    "faq.a3": "We start in Djerba and nearby areas; zones are added from the admin dashboard.",
    "faq.q4": "Can I order something other than food?",
    "faq.a4": "Yes — errands, documents and shop purchases are supported.",

    "contact.title": "Contact us",
    "contact.subtitle": "Our team is here to help.",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.zone": "Service area",
    "contact.zoneValue": "Djerba and nearby areas, Tunisia",

    "footer.rights": "All rights reserved",
    "footer.tagline": "A Tunisian delivery platform.",
  },
} as const;

export type TranslationKey = keyof (typeof messages)["ar"];
