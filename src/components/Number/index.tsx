import { NumberContainer } from "./styles"

interface NumberProps {
  $variant:
  | 'title-m'
  | 'text-l-bold'
  | 'text-m'
  | 'text-m-bold'
  className?: string
  $number: number
}

export function Number({ $variant, $number }: NumberProps) {
  return (
    <NumberContainer $variant={$variant} $number={$number}>
      {$number && <span>{$number}</span>}
    </NumberContainer>
  )
}