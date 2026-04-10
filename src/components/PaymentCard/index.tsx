import { ButtonPayment } from "../ButtonPayment";
import { Card } from "../Card";
import { PaymentCardContainer } from "./styles";

export function PaymentCard() {
  return (
    <PaymentCardContainer>
      <Card $variant="smallSquare">
        <ButtonPayment variantText="CARTÃO DE CRÉDITO" icon="CreditCard" variantSize={16} />
        <ButtonPayment variantText="CARTÃO DE DÉBITO" icon="Landmark" variantSize={16} />
        <ButtonPayment variantText="DINHEIRO" icon="Banknote" variantSize={16} />
      </Card>
    </PaymentCardContainer>
  )
}