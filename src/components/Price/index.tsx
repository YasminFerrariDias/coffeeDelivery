import { Number } from '../Number'
import { Text } from '../Text'
import { PriceContainer } from './styles'

interface PriceProps {
  $price: number | string
  $variant: 'smallPrice' | 'mediumPrice' | 'largePrice' | 'smallLargePrice'
}

export function Price({ $price, $variant }: PriceProps) {
  const formattedNumber = (typeof $price === 'number') ? $price.toFixed(2).replace('.', ',') : $price

  if ($variant === 'smallLargePrice') {
    return (
      <PriceContainer $variant={$variant}>
        <Text color='base-text' $variant='text-s' text='R$' />
        <Number $variantText='title-m' $number={formattedNumber} $variantColor='base-text' />
      </PriceContainer>
    )
  } else if ($variant === 'smallPrice') {
    return (
      <PriceContainer $variant={$variant}>
        <Text color='base-text' $variant='text-m' text='R$' />
        <Number $variantText='text-m' $number={formattedNumber} $variantColor='base-text' />
      </PriceContainer>
    )
  } else if ($variant === 'mediumPrice') {
    return (
      <PriceContainer $variant={$variant}>
        <Text color='base-text' $variant='text-m-bold' text='R$' />
        <Number $variantText='text-m-bold' $number={formattedNumber} $variantColor='base-text' />
      </PriceContainer>
    )
  } else if ($variant === 'largePrice') {
    return (
      <PriceContainer $variant={$variant}>
        <Text color='base-subtitle' $variant='text-l-bold' text='R$' />
        <Number $variantText='text-l-bold' $number={formattedNumber} $variantColor='base-subtitle' />
      </PriceContainer>
    )
  }

}
