import { Card } from "../Card";
import { CartCardContainer } from "./styles";

export function CartCard() {
  return (
    <CartCardContainer>
      <Card $variant="mediumCart" > </Card>
    </CartCardContainer>
  )
}