/**
 * Order state machine — single source of truth for allowed transitions.
 * Shared by server (enforcement) and client (which buttons to show).
 */
export const ORDER_STATUSES = [
  "PENDING",
  "ACCEPTED",
  "PREPARING",
  "READY",
  "DRIVER_ASSIGNED",
  "PICKED_UP",
  "ON_THE_WAY",
  "DELIVERED",
  "CANCELLED",
] as const;
export type OrderStatus = (typeof ORDER_STATUSES)[number];

export type Actor = "customer" | "restaurant" | "driver" | "admin";

type Transition = { to: OrderStatus; by: Actor[] };

const transitions: Record<OrderStatus, Transition[]> = {
  PENDING: [
    { to: "ACCEPTED", by: ["restaurant", "admin"] },
    { to: "CANCELLED", by: ["customer", "restaurant", "admin"] },
  ],
  ACCEPTED: [
    { to: "PREPARING", by: ["restaurant", "admin"] },
    { to: "CANCELLED", by: ["restaurant", "admin"] },
  ],
  PREPARING: [
    { to: "READY", by: ["restaurant", "admin"] },
    { to: "CANCELLED", by: ["admin"] },
  ],
  READY: [
    { to: "DRIVER_ASSIGNED", by: ["driver", "admin"] },
    { to: "CANCELLED", by: ["admin"] },
  ],
  DRIVER_ASSIGNED: [{ to: "PICKED_UP", by: ["driver", "admin"] }],
  PICKED_UP: [{ to: "ON_THE_WAY", by: ["driver", "admin"] }],
  ON_THE_WAY: [{ to: "DELIVERED", by: ["driver", "admin"] }],
  DELIVERED: [],
  CANCELLED: [],
};

export function canTransition(from: OrderStatus, to: OrderStatus, actor: Actor): boolean {
  return transitions[from].some((t) => t.to === to && t.by.includes(actor));
}

export function nextActions(from: OrderStatus, actor: Actor): OrderStatus[] {
  return transitions[from].filter((t) => t.by.includes(actor)).map((t) => t.to);
}

/** Customer-facing progress steps (index used for the tracking timeline). */
export const TRACKING_STEPS: OrderStatus[] = [
  "PENDING",
  "PREPARING",
  "DRIVER_ASSIGNED",
  "PICKED_UP",
  "ON_THE_WAY",
  "DELIVERED",
];

export function trackingIndex(status: OrderStatus): number {
  if (status === "ACCEPTED") return 1;
  if (status === "READY") return 1;
  return TRACKING_STEPS.indexOf(status);
}

export const statusLabels: Record<OrderStatus, { ar: string; fr: string; en: string }> = {
  PENDING: { ar: "الطلب تم استلامه", fr: "Commande reçue", en: "Order received" },
  ACCEPTED: { ar: "المطعم قبل الطلب", fr: "Acceptée", en: "Accepted" },
  PREPARING: { ar: "المطعم يحضّر الطلب", fr: "En préparation", en: "Preparing" },
  READY: { ar: "الطلب حاضر", fr: "Prête", en: "Ready" },
  DRIVER_ASSIGNED: { ar: "السائق في الطريق للمطعم", fr: "Livreur en route", en: "Driver on the way to restaurant" },
  PICKED_UP: { ar: "السائق استلم الطلب", fr: "Récupérée", en: "Picked up" },
  ON_THE_WAY: { ar: "الطلب في الطريق إليك", fr: "En route vers vous", en: "On the way to you" },
  DELIVERED: { ar: "تم التوصيل", fr: "Livrée", en: "Delivered" },
  CANCELLED: { ar: "ملغى", fr: "Annulée", en: "Cancelled" },
};
