import type { coffeeImages } from "../../consts/coffeeImages";
import { useCart } from "../../context/useCart";
import { Card } from "../Card";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { Price } from "../Price";
import { Text } from "../Text";
import { Button, ButtonLink, CartCardContainer, Row, Separate, TotalInformation } from "./styles";

export type CoffeeImage = keyof typeof coffeeImages;

export function CartCard() {
  const { cart } = useCart();

  return (
    <Card $variant="mediumRounded">
      <CartCardContainer>

        {cart.map((item) => {
          return (
            <div key={`${item.name}-${item.price}-${item.amount}`}>
              <CoffeeCartCard img={item.img} number={item.price} text={item.name} />
              <Separate />
            </div>
          )
        })}


        <TotalInformation>
          <Row>
            <Text text="Total de itens" $variant="text-s" color="base-text" />
            <Price $number={29.70} $variant="smallPrice" />
          </Row>

          <Row>
            <Text text="Entrega" $variant="text-s" color="base-text" />
            <Price $number={3.50} $variant="smallPrice" />
          </Row>

          <Row>
            <Text text="Total" $variant="text-l-bold" color="base-subtitle" />
            <Price $number={33.20} $variant="largePrice" />
          </Row>
        </TotalInformation>
        <ButtonLink to="/success">
          <Button><Text text="CONFIRMAR PEDIDO" color="white" $variant="button-g" /></Button>
        </ButtonLink>
      </CartCardContainer>
    </Card>
  )
}