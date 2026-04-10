import { Card } from "../Card";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { Price } from "../Price";
import { Text } from "../Text";
import { Button, CartCardContainer, Row, Separate, TotalInformation } from "./styles";

export function CartCard() {
  return (
    <Card $variant="mediumRounded">
      <CartCardContainer>
        <CoffeeCartCard img="ExpressoTradicional" text="Expresso Tradicional" number={9.90} />
        <Separate />
        <CoffeeCartCard img="Latte" text="Latte" number={9.90} />
        <Separate />

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
        <Button>CONFIRMA PEDIDO</Button>
      </CartCardContainer>
    </Card>
  )
}