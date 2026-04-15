import { createContext } from "react";

export type CartProps = {
  img: string;
  name: string;
  price: number;
  amount: number;
}

type CartContextProps = {
  cart: CartProps[]; 
  addToCart: (item: CartProps) => void;
}

export const CartContext = createContext<CartContextProps>({} as CartContextProps)
