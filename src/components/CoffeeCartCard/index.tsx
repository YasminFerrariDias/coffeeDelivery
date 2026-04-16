import { coffeeImages } from '../../consts/coffeeImages'
import { useCart } from '../../context/useCart'
import { ButtonText } from '../ButtonText'
import { Card } from '../Card'
import { Count } from '../Count'

import { Price } from '../Price'
import { Text } from '../Text'
import { Buttons, Cart, CoffeeCartCardContainer, ImgStyle, Info, Value } from './styles'

type CoffeeImage = keyof typeof coffeeImages

interface CoffeeCartCardProps {
  text: string
  price: number
  img: CoffeeImage
  amount: number
}

export function CoffeeCartCard({ text, price, img, amount }: CoffeeCartCardProps) {
  const { incrementItem, decrementItem, removeItem } = useCart()

  return (
    <Card $variant="mediumCart">
      <CoffeeCartCardContainer $img={img}>
        <Cart>
          <ImgStyle src={coffeeImages[img]} alt={text} />

          <Info>
            <Text text={text} color="base-subtitle" $variant="text-m" />
            <Buttons>
              <Count count={amount} onAdd={() => incrementItem(img)} onRemove={() => decrementItem(img)}/>
              <ButtonText icon="Trash2" text='REMOVER' ColorIcon="purple" variantSize={16} $variant="button-s" color="base-text" ColorVariant="base-button" $ColorHover='base-hover' onClick={() => removeItem(img)} />
            </Buttons>
          </Info>
        </Cart>

        <Value>
          <Price $price={price} $variant="mediumPrice" />
        </Value>
      </CoffeeCartCardContainer>
    </Card>
  )
}
