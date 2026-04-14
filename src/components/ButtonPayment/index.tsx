import { PAYMENT_OPTIONS } from "../../consts/paymentType";
import { IconComponent } from "../IconComponent";
import { ButtonPaymentContainer } from "./styles";

type IconComponentProps = React.ComponentProps<typeof IconComponent>
type PaymentType = keyof typeof PAYMENT_OPTIONS

interface ButtonPaymentProps extends Omit<IconComponentProps, 'ColorIcon'>  {
  type: PaymentType
  FontVariant?: 'button-s' | 'button-g'
  ColorIcon?: IconComponentProps['ColorIcon']
  selected?: boolean
}

export function ButtonPayment({ type, FontVariant = 'button-s', icon, selected = false }: ButtonPaymentProps) {
  const option = PAYMENT_OPTIONS[type]

  return (
    <ButtonPaymentContainer className={FontVariant} $selected={selected}>
      <IconComponent icon={icon} ColorIcon="purple" variantSize={16} />
      {option.label}
    </ButtonPaymentContainer>
  )
}
