import { createContext } from "react";
import type { CoffeeImage } from "../components/CartCard";

export type CartProps = {
  img: CoffeeImage;
  name: string;
  price: number;
  amount: number;
}

type CartContextProps = {
  cart: CartProps[]; 
  addToCart: (item: CartProps) => void;
}

export const CartContext = createContext<CartContextProps>({} as CartContextProps)
