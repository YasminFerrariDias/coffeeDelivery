import { AddCart, CoffeeCardContainer, CountContainer, Operation, Result } from "./styles";
import { Title } from "../Title";
import { Text } from "../Text";
import { Price } from "../Price";
import { Button } from "../Button";
import { Card } from "../Card";
import { Tag } from "../Tag";
import { coffeeImages } from '../../consts/coffeeImages';
import { tagOptions } from "../../consts/tagOptions";
import { useCounter } from "../../hooks/useCounter";
import { IconComponent } from "../IconComponent";
import { Number } from "../Number";
import { useCart } from "../../context/useCart";

type CoffeeImage = keyof typeof coffeeImages
type TagOption = keyof typeof tagOptions

interface CoffeeCardProps {
  tagValue: readonly TagOption[]
  text: string
  textTitle: string
  price: number
  img: CoffeeImage
}

export function CoffeeCard({ img, tagValue, textTitle, text, price }: CoffeeCardProps) {
  const Img = coffeeImages[img]
  const [count, addItems, removeItems] = useCounter();
  const { addToCart } = useCart();

  return (
    <Card $variant="smallRounded"  >
      <CoffeeCardContainer>
        <img src={Img} />

        <span className="tags">
          {
            tagValue.map((tagValue) => (
              <Tag key={tagValue} tagValue={tagValue} />
            ))
          }
        </span>
        <span className="title"><Title text={textTitle} $color="base-subtitle" $variant="title-s" /></span>
        <span className="text"><Text text={text} color="base-label" $variant="text-s" /></span>
        <footer>
          <Price $number={price} $variant="smallLargePrice" />
          <AddCart>
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
            <Button variantSize={22} icon="ShoppingCart" ColorIcon="base-card" ColorVariant="purple-dark" $ColorHover="purple" onClick={() => {
              console.log("Clicou no carrinho");
              console.log({
                img,
                name: textTitle,
                price,
                amount: count,
              });

              addToCart({
                img,
                name: textTitle,
                price,
                amount: count,
              });
            }} />
          </AddCart>
        </footer>
      </CoffeeCardContainer>
    </Card>
  )
}