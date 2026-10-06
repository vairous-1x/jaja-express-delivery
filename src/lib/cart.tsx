import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type CartOption = { id: string; name: string; priceDelta: number };
export type CartLine = {
  key: string;
  itemId: string;
  name: string;
  basePrice: number;
  options: CartOption[];
  quantity: number;
};
type CartState = { restaurantId: string | null; restaurantName: string | null; lines: CartLine[] };

type CartValue = CartState & {
  count: number;
  previewSubtotal: number;
  add: (restaurant: { id: string; name: string }, line: Omit<CartLine, "key" | "quantity">, qty?: number) => void;
  setQuantity: (key: string, qty: number) => void;
  clear: () => void;
};

const STORAGE_KEY = "3jaja.cart";
const empty: CartState = { restaurantId: null, restaurantName: null, lines: [] };
const CartContext = createContext<CartValue | null>(null);

export const lineUnitPrice = (l: Pick<CartLine, "basePrice" | "options">) =>
  l.basePrice + l.options.reduce((s, o) => s + o.priceDelta, 0);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CartState>(empty);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setState(JSON.parse(raw) as CartState);
    } catch {
      /* ignore corrupt cart */
    }
  }, []);

  const persist = (next: CartState) => {
    setState(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const value = useMemo<CartValue>(() => {
    const count = state.lines.reduce((s, l) => s + l.quantity, 0);
    const previewSubtotal = state.lines.reduce((s, l) => s + lineUnitPrice(l) * l.quantity, 0);
    return {
      ...state,
      count,
      previewSubtotal,
      add: (restaurant, line, qty = 1) => {
        const key = `${line.itemId}:${line.options.map((o) => o.id).sort().join(",")}`;
        // A cart holds one restaurant at a time.
        const base = state.restaurantId === restaurant.id ? state : { ...empty };
        const existing = base.lines.find((l) => l.key === key);
        const lines = existing
          ? base.lines.map((l) => (l.key === key ? { ...l, quantity: l.quantity + qty } : l))
          : [...base.lines, { ...line, key, quantity: qty }];
        persist({ restaurantId: restaurant.id, restaurantName: restaurant.name, lines });
      },
      setQuantity: (key, qty) => {
        const lines =
          qty <= 0
            ? state.lines.filter((l) => l.key !== key)
            : state.lines.map((l) => (l.key === key ? { ...l, quantity: qty } : l));
        persist(lines.length ? { ...state, lines } : empty);
      },
      clear: () => persist(empty),
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
