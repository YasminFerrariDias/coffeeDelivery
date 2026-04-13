import ExpressoTradicionalImg from '../../assets/img/Type=Expresso.svg'
import LatteImg from '../../assets/img/Type=Latte.svg'

import { Button } from '../Button'
import { Card } from '../Card'
import { Count } from '../Count'
import { Price } from '../Price'
import { Text } from '../Text'
import { Buttons, Cart, CoffeeCartCardContainer, ImgStyle, Info, Value } from './styles'

interface CoffeeCartCardProps {
  text: string
  number: number
  img: 'ExpressoTradicional' | 'Latte'
}

export function CoffeeCartCard({ text, number, img, }: CoffeeCartCardProps) {
  const coffeeImages = {
    ExpressoTradicional: ExpressoTradicionalImg,
    Latte: LatteImg,
  }

  const selectedImage = coffeeImages[img]

  return (

    <Card $variant="mediumCart">
      <CoffeeCartCardContainer>
        <Cart>
          <ImgStyle src={selectedImage} alt={text} />

          <Info>
            <Text text={text} color="base-subtitle" $variant="text-m" />
            <Buttons>
              <Count />
              <Button icon="Trash2" text='REMOVER' ColorIcon="purple" variantSize={16} $variant="button-s" color="base-text" ColorVariant="base-button" $ColorHover='base-hover' />
            </Buttons>
          </Info>
        </Cart>

        <Value>
          <Price $number={number} $variant="mediumPrice" />
        </Value>
      </CoffeeCartCardContainer>
    </Card>
  )
}