import { Text } from '../Text'
import { Title } from '../Title'
import { PriceContainer } from './styles'

interface PriceProps{
  price: string
}

export function Price({ price }: PriceProps) {
  return (
    <PriceContainer>
      <Text color='base-text' variant='text-s' text='R$' />
      <Title color='base-text' text={price} variant='title-m'/>
    </PriceContainer>
  )
}