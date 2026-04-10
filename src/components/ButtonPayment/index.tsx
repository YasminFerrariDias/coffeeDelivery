import { IconComponent } from "../IconComponent";
import { ButtonPaymentContainer } from "./styles";

type IconComponentProps = React.ComponentProps<typeof IconComponent>

interface ButtonPaymentProps extends Omit<IconComponentProps, 'ColorIcon'>  {
  variantText: 'CARTÃO DE CRÉDITO' | 'CARTÃO DE DÉBITO' | 'DINHEIRO'
  FontVariant?: 'button-s' | 'button-g'
  ColorIcon?: IconComponentProps['ColorIcon']
}

export function ButtonPayment({ variantText, FontVariant = 'button-s', icon }: ButtonPaymentProps) {
  return (
    <ButtonPaymentContainer className={FontVariant}>
      <IconComponent icon={icon} ColorIcon="purple" variantSize={16} />
      {variantText}
    </ButtonPaymentContainer>
  )
}
