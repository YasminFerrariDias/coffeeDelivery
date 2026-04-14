import { IconBadge } from "../IconBadge";
import { Text } from "../Text";
import { Info, InfoItem, SuccessCardContainer, Delivery } from "./styles";

export function SuccessCard() {
  return (
    <SuccessCardContainer>
      <InfoItem>
        <IconBadge icon={"MapPin"} $BackgroundVariant="purple" />
        <Info>
          <Delivery>
          <Text text="Entrega em" color="base-text" $variant="text-m" />
          <Text text="Rua João Daniel Martinelli, 102" color="base-text" $variant="text-m-bold" />
        </Delivery>
        <Text text="Farrapos - Porto Alegre, RS" color="base-text" $variant="text-m" />
        </Info>
      </InfoItem>

      <InfoItem>
        <IconBadge icon={"Clock"} $BackgroundVariant="yellow" />
        <Info>
          <Text text="Previsão de entrega" color="base-text" $variant="text-m" />
          <Text text="20 min - 30 min" color="base-text" $variant="text-m-bold" />
        </Info>
      </InfoItem>

      <InfoItem>
        <IconBadge icon={"DollarSign"} $BackgroundVariant="yellow-dark" />
        <Info>
        <Text text="Pagamento na entrega" color="base-text" $variant="text-m" />
        <Text text="Cartão de Crédito" color="base-text" $variant="text-m-bold" />
        </Info>
      </InfoItem>
    </SuccessCardContainer>
  )
}