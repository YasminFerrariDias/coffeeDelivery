import { ButtonPayment } from "../ButtonPayment";
import { Card } from "../Card";
import { IconComponent } from "../IconComponent";
import { Text } from "../Text";
import { Buttons, Description, Icon, Information, PaymentCardContainer } from "./styles";

export function PaymentCard() {
  return (
    <PaymentCardContainer>
      <Card $variant="smallSquare">
        <Information>
          <Icon>
            <IconComponent variantSize={22} icon="DollarSign" ColorIcon="purple" />
          </Icon>
          <Description>
            <Text text="Pagamento" color="base-subtitle" $variant="text-m" />
            <Text text="O pagamento é feito na entrega. Escolha a forma que deseja pagar" color="base-text" $variant="text-s" />
          </Description>
        </Information>
        
        <Buttons>
          <ButtonPayment variantText="CARTÃO DE CRÉDITO" icon="CreditCard" variantSize={16} />
          <ButtonPayment variantText="CARTÃO DE DÉBITO" icon="Landmark" variantSize={16} />
          <ButtonPayment variantText="DINHEIRO" icon="Banknote" variantSize={16} />
        </Buttons>
      </Card>
    </PaymentCardContainer>
  )
}