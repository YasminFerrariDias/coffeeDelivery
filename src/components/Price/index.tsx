import { Number } from '../Number'
import { Text } from '../Text'
import { PriceContainer } from './styles'

interface PriceProps{
  $number: number
}

export function Price({ $number }: PriceProps) {
  return (
    <PriceContainer>
      <Text color='base-text' $variant='text-s' text='R$' />
      <Number $variantText='title-m' $number={$number} $variantColor='base-text' />
    </PriceContainer>
  )
}