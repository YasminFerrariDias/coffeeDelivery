import { Card } from "../Card";
import { PaymentButton } from "../PaymentButton";
import { PaymentCardContainer } from "./styles";

export function PaymentCard() {
  return (
    <PaymentCardContainer>
      <Card $variant="smallSquare">
        <PaymentButton text="CARTÃO DE DÉBITO" />
      </Card>
    </PaymentCardContainer>
  )
}