import { IconComponent } from "../IconComponent";
import { Text } from "../Text";
import { Icon, SuccessCardContainer } from "./styles";

export function SuccessCard() {
  return (
    <SuccessCardContainer>
      <div>
        <Icon>
          <IconComponent icon="MapPin" ColorIcon="white" variantSize={16} className="icon" />
        </Icon>
        <div>
          <Text text="Entrega em" color="base-text" $variant="text-m" />
          <Text text="Rua João Daniel Martinelli, 102" color="base-text" $variant="text-m-bold" />
        </div>
        <Text text="Farrapos - Porto Alegre, RS" color="base-text" $variant="text-m" />
      </div>

      <div>
        <Icon>
          <IconComponent icon="" ColorIcon="white" variantSize={16} className="icon" />
        </Icon>
        <Text text="Entrega em" color="base-text" $variant="text-m" />
        <Text text="Rua João Daniel Martinelli, 102" color="base-text" $variant="text-m-bold" />
      </div>

      <div>
        <Icon>
          <IconComponent icon="DollarSign" ColorIcon="white" variantSize={16} className="icon" />
        </Icon>
        <Text text="Pagamento na entrega" color="base-text" $variant="text-m" />
        <Text text="Cartão de Crédito" color="base-text" $variant="text-m-bold" />
      </div>
    </SuccessCardContainer>
  )
}