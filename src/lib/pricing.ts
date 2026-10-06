/** Pure pricing engine. The server is the only authority; the client uses it for previews. */

export type PricingSettings = {
  service_fee: number;
  commission_pct: number;
  driver_payout_pct: number;
  min_delivery_fee: number;
  max_delivery_fee: number;
};

export type PricedLine = { unitPrice: number; quantity: number };

const round3 = (n: number) => Math.round(n * 1000) / 1000;

export function computeDeliveryFee(baseFee: number, settings: PricingSettings, distanceKm?: number) {
  const extraKm = distanceKm ? Math.max(0, distanceKm - 2) : 0;
  const raw = baseFee + extraKm * 0.5;
  return round3(Math.min(settings.max_delivery_fee, Math.max(settings.min_delivery_fee, raw)));
}

export function computeTotals(
  lines: PricedLine[],
  restaurantDeliveryFee: number,
  settings: PricingSettings,
  distanceKm?: number,
) {
  const subtotal = round3(lines.reduce((sum, l) => sum + l.unitPrice * l.quantity, 0));
  const deliveryFee = computeDeliveryFee(restaurantDeliveryFee, settings, distanceKm);
  const serviceFee = round3(settings.service_fee);
  const discount = 0;
  const total = round3(subtotal + deliveryFee + serviceFee - discount);
  const commissionAmount = round3((subtotal * settings.commission_pct) / 100);
  const driverPayout = round3((deliveryFee * settings.driver_payout_pct) / 100);
  const restaurantPayout = round3(subtotal - commissionAmount);
  return { subtotal, deliveryFee, serviceFee, discount, total, commissionAmount, driverPayout, restaurantPayout };
}

export function haversineKm(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((a.lat * Math.PI) / 180) * Math.cos((b.lat * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

export function formatTnd(value: number) {
  return `${Number(value).toFixed(3)} TND`;
}
