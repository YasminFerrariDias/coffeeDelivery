import { NumberContainer } from "./styles"

interface NumberProps {
  $variantText:
  | 'title-m'
  | 'text-l-bold'
  | 'text-m'
  | 'text-m-bold'
  $variantColor:
  | 'base-title'
  | 'base-subtitle'
  | 'base-text'
  $number: number | string
  className?: string
}

export function Number({ $variantText, $variantColor, $number }: NumberProps) {
  return (
    <NumberContainer $variantText={$variantText} $variantColor={$variantColor} $number={$number} className="number" >
      {$number && <span>{$number}</span>}
    </NumberContainer>
  )
} 