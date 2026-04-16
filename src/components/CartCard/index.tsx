import type { coffeeImages } from "../../consts/coffeeImages";
import { useAddress } from "../../context/useAddress";
import { useCart } from "../../context/useCart";
import { usePayment } from "../../context/usePayment";
import { Card } from "../Card";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { Price } from "../Price";
import { Text } from "../Text";
import { Button, ButtonLink, CardEmpty, CartCardContainer, Row, Separate, TotalInformation } from "./styles";

export type CoffeeImage = keyof typeof coffeeImages;

export function CartCard() {
  const { cart } = useCart()
  const { address } = useAddress()
  const { payment } = usePayment()

  function validationComponents() {
    if (cart.length === 0) {
      console.log("O carrinho não pode estar vazio!")
      return false
    }

    if (!address?.cep || !address?.rua || !address?.numero || !address?.bairro || !address?.cidade || !address?.uf) {
      console.log("O endreço não pode estar vazio!")
      return false
    }

    if (!payment) {
      console.log("A forma de pagamento não pode estar vazio!")
      return false
    }

    return true
  }

  const totalItem = cart.reduce((accumulator, item) => {
    return accumulator + (item.amount * item.price);
  }, 0);
  const delivery = 3.5
  const total = totalItem + delivery

  return (
    <Card $variant="mediumRounded">
      {cart.length === 0
        ?
        <CardEmpty>
          <p>Nenhum café foi adicionado ao carrinho!</p>
          <p><ButtonLink to="/">Clique aqui</ButtonLink> e vá as compras!</p>
        </CardEmpty>
        :

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
          <ButtonLink
            to="/success"
            onClick={(e) => {
              if (!validationComponents()) {
                e.preventDefault();
              }
            }}
          >
            <Button><Text text="CONFIRMAR PEDIDO" color="white" $variant="button-g" /></Button>
          </ButtonLink>
        </CartCardContainer>
      }
    </Card>
  )
}