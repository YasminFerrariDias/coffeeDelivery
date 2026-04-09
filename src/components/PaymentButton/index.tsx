import { PaymentButtonContainer } from "./styles"

interface PaymentButtonProps {
  text: 'CARTÃO DE CRÉDITO' | 'CARTÃO DE DÉBITO' | 'DINHEIRO'
}

export function PaymentButton({ text }: PaymentButtonProps) {
  return (
    <PaymentButtonContainer $text={text} />
  )
}