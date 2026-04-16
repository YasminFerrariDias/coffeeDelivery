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

  const totalItem = cart.reduce((accumulator, item) => {
    return accumulator + (item.amount * item.price);
  }, 0); 
  const delivery = 3.5
  const total = totalItem + delivery

  return (
    <Card $variant="mediumRounded">
      <CartCardContainer>

        {cart.map((item) => {
          return (
            <div key={item.img}>
              <CoffeeCartCard img={item.img} price={item.price} text={item.name} amount={item.amount} />
              <Separate />
            </div>
          )
        })}

        <TotalInformation>
          <Row>
            <Text text="Total de itens" $variant="text-s" color="base-text" />
            <Price $price={totalItem} $variant="smallPrice" />
          </Row>

          <Row>
            <Text text="Entrega" $variant="text-s" color="base-text" />
            <Price $price={delivery} $variant="smallPrice" />
          </Row>

          <Row>
            <Text text="Total" $variant="text-l-bold" color="base-subtitle" />
            <Price $price={total} $variant="largePrice" />
          </Row>
        </TotalInformation>
        <ButtonLink to="/success">
          <Button><Text text="CONFIRMAR PEDIDO" color="white" $variant="button-g" /></Button>
        </ButtonLink>
      </CartCardContainer>
    </Card>
  )
}