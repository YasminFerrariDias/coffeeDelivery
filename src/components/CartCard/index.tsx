import { CoffeeCartCard } from "../CoffeeCartCard";
import { CartCardContainer } from "./styles";

export function CartCard() {
  return (
    <CartCardContainer>
      <CoffeeCartCard img="ExpressoTradicional" text="Expresso Tradicional" number={9.90} />
    </CartCardContainer>
  )
}