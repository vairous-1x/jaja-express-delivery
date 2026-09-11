import burger from "@/assets/food-burger.jpg";
import pizza from "@/assets/food-pizza.jpg";
import tunisian from "@/assets/food-tunisian.jpg";
import coffee from "@/assets/food-coffee.jpg";

/** DEMO DATA — replaced by database records in phase 2. */
export type DemoRestaurant = {
  id: string;
  name: string;
  image: string;
  cuisines: string[];
  rating: number;
  reviews: number;
  minMinutes: number;
  maxMinutes: number;
  deliveryFee: number;
  minOrder: number;
  distanceKm: number;
  isOpen: boolean;
  isDemo: true;
};

export const demoRestaurants: DemoRestaurant[] = [
  {
    id: "demo-djerba-burger",
    name: "Djerba Burger",
    image: burger,
    cuisines: ["🍔", "🍟"],
    rating: 4.7,
    reviews: 312,
    minMinutes: 25,
    maxMinutes: 35,
    deliveryFee: 2.5,
    minOrder: 10,
    distanceKm: 1.8,
    isOpen: true,
    isDemo: true,
  },
  {
    id: "demo-pizza-house",
    name: "Pizza House",
    image: pizza,
    cuisines: ["🍕", "🍝"],
    rating: 4.5,
    reviews: 208,
    minMinutes: 30,
    maxMinutes: 45,
    deliveryFee: 3,
    minOrder: 12,
    distanceKm: 3.2,
    isOpen: true,
    isDemo: true,
  },
  {
    id: "demo-tabouna",
    name: "Tabouna Express",
    image: tunisian,
    cuisines: ["🥪", "🍗"],
    rating: 4.8,
    reviews: 431,
    minMinutes: 20,
    maxMinutes: 30,
    deliveryFee: 2,
    minOrder: 8,
    distanceKm: 1.1,
    isOpen: true,
    isDemo: true,
  },
  {
    id: "demo-cafe-djerba",
    name: "Café Djerba",
    image: coffee,
    cuisines: ["☕", "🍰"],
    rating: 4.4,
    reviews: 96,
    minMinutes: 15,
    maxMinutes: 25,
    deliveryFee: 1.8,
    minOrder: 5,
    distanceKm: 0.9,
    isOpen: false,
    isDemo: true,
  },
];
