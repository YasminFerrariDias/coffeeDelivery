import { coffeeImages } from '../../consts/coffeeImages'
import { useCounter } from '../../hooks/useCounter'
import { ButtonText } from '../ButtonText'
import { Card } from '../Card'
import { IconComponent } from '../IconComponent'
import { Number } from '../Number'
import { Price } from '../Price'
import { Text } from '../Text'
import { Buttons, Cart, CoffeeCartCardContainer, CountContainer, ImgStyle, Info, Operation, Result, Value } from './styles'

type CoffeeImage = keyof typeof coffeeImages

interface CoffeeCartCardProps {
  text: string
  number: number
  img: CoffeeImage
}

export function CoffeeCartCard({ text, number, img }: CoffeeCartCardProps) {
  const [count, addItems, removeItems] = useCounter();

  return (
    <Card $variant="mediumCart">
      <CoffeeCartCardContainer $img={img}>
        <Cart>
          <ImgStyle src={coffeeImages[img]} alt={text} />

          <Info>
            <Text text={text} color="base-subtitle" $variant="text-m" />
            <Buttons>
              <CountContainer>
                <Operation onClick={removeItems}>
                  <IconComponent icon="Minus" ColorIcon="purple" variantSize={14} $ColorIconHover="purple-dark" />
                </Operation>

                <Result>
                  <Number $variantColor="base-title" $variantText="text-m" $number={count} className='number' />
                </Result>

                <Operation onClick={addItems}>
                  <IconComponent icon="Plus" ColorIcon="purple" variantSize={14} $ColorIconHover="purple-dark" />
                </Operation>
              </CountContainer>
              <ButtonText icon="Trash2" text='REMOVER' ColorIcon="purple" variantSize={16} $variant="button-s" color="base-text" ColorVariant="base-button" $ColorHover='base-hover' />
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