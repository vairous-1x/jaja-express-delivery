import burger from "@/assets/food-burger.jpg";
import pizza from "@/assets/food-pizza.jpg";
import tunisian from "@/assets/food-tunisian.jpg";
import coffee from "@/assets/food-coffee.jpg";

const images: Record<string, string> = { burger, pizza, tunisian, coffee };

export function foodImage(key: string | null | undefined) {
  return images[key ?? ""] ?? tunisian;
}
