import { AddCart, CoffeeCardContainer } from "./styles";
import { Title } from "../Title";
import { Text } from "../Text";
import { Price } from "../Price";
import { Count } from "../Count"; 
import { Button } from "../Button";
import { Card } from "../Card";
import { Tag } from "../Tag";
import { coffeeImages } from '../../consts/coffeeImages'
import { tagOptions } from "../../consts/tagOptions";

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
            <Count />
            <Button variantSize={22} icon="ShoppingCart" ColorIcon="base-card" ColorVariant="purple-dark" $ColorHover="purple" />
          </AddCart>
        </footer>
      </CoffeeCardContainer>
    </Card>
  )
} 