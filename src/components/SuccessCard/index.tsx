import { IconBadge } from "../IconBadge";
import { Text } from "../Text";
import { SuccessCardContainer } from "./styles";

export function SuccessCard() {
  return (
    <SuccessCardContainer>
      <div>
        <IconBadge icon={"MapPin"} $BackgroundVariant="purple" />
        <div>
          <Text text="Entrega em" color="base-text" $variant="text-m" />
          <Text text="Rua João Daniel Martinelli, 102" color="base-text" $variant="text-m-bold" />
        </div>
        <Text text="Farrapos - Porto Alegre, RS" color="base-text" $variant="text-m" />
      </div>

      <div>
        <IconBadge icon={"Clock"} $BackgroundVariant="yellow" />
        <Text text="Previsõa de entrega" color="base-text" $variant="text-m" />
        <Text text="20 min - 30 min" color="base-text" $variant="text-m-bold" />
      </div>

      <div>
        <IconBadge icon={"DollarSign"} $BackgroundVariant="yellow-dark" />
        <Text text="Pagamento na entrega" color="base-text" $variant="text-m" />
        <Text text="Cartão de Crédito" color="base-text" $variant="text-m-bold" />
      </div>
    </SuccessCardContainer>
  )
}