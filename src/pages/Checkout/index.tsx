import { CartCard } from "../../components/CartCard";
import { AddressCard } from "../../components/AddressCard";
import { PaymentCard } from "../../components/PaymentCard";
import { Header } from "../../components/Header";
import { CheckoutContainer, CompleteYourOrder, Container, SelectedCoffees } from "./styles";
import { Title } from "../../components/Title";

export function Checkout() {
  return (
    <>
      <Header />
      <CheckoutContainer>
        <CompleteYourOrder>
          <Title text="Complete seu pedido" $color="base-subtitle" $variant="title-xs" />

          <Container>
            <AddressCard />
            <PaymentCard />
          </Container>
        </CompleteYourOrder>

        <SelectedCoffees>
          <Title text="Cafés selecionados" $color="base-subtitle" $variant="title-xs" />

          <CartCard />
        </SelectedCoffees>
      </CheckoutContainer>
    </>
  )
}