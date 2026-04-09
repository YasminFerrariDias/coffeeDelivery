import { Number } from '../Number'
import { Text } from '../Text'
import { PriceContainer } from './styles'

interface PriceProps {
  $number: number | string
}

export function Price({ $number }: PriceProps) {

    const formattedNumber = (typeof $number === 'number') ? $number.toFixed(2).replace('.', ',') : $number
    
    return (
      
      <PriceContainer>
        <Text color='base-text' $variant='text-s' text='R$' />
        <Number $variantText='title-m' $number={formattedNumber} $variantColor='base-text' />
      </PriceContainer>
    )
  } 
