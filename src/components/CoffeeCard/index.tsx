import { AddCart, CoffeeCardContainer } from "./styles";
import { Title } from "../Title";
import { Text } from "../Text";
import { Price } from "../Price";
import { Button } from "../Button";
import { Card } from "../Card";
import { Tag } from "../Tag";
import { coffeeImages } from '../../consts/coffeeImages';
import { tagOptions } from "../../consts/tagOptions";
import { useCart } from "../../context/useCart";
import { Count } from "../Count";
import { useCounter } from "../../hooks/useCounter";

type CoffeeImage = keyof typeof coffeeImages
type TagOption = keyof typeof tagOptions

interface CoffeeCardProps {
  tagValue: readonly TagOption[]
  text: string
  textTitle: string
  price: number
  img: CoffeeImage
  amount: number
}

export function CoffeeCard({ img, tagValue, textTitle, text, price }: CoffeeCardProps) {
  const Img = coffeeImages[img]
  const { addToCart } = useCart();
  const [count, addItems, removeItems] = useCounter()

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
          <Price $price={price} $variant="smallLargePrice" />
          <AddCart>
            <Count count={count} onAdd={addItems} onRemove={removeItems} />
            <Button
              variantSize={22}
              icon="ShoppingCart"
              ColorIcon="base-card"
              ColorVariant="purple-dark"
              $ColorHover="purple"
              onClick={() => {
                if (count != 0) {
                  addToCart({
                    img,
                    name: textTitle,
                    price,
                    amount: count,
                  });
                } else {
                  return
                }
              }} />
          </AddCart>
        </footer>
      </CoffeeCardContainer>
    </Card>
  )
}