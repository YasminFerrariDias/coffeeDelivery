import { SuccessCard } from "../../components/SuccessCard";
import { Text } from "../../components/Text";
import { Title } from "../../components/Title";
import { Info, SuccessCardContainer, LeftContainer, RightContainer } from "./style";
import Illustration from "../../assets/img/Illustration.png"
import { Header } from "../../components/Header";

export function Success() {
  return (
    <>
      <Header />
      <SuccessCardContainer>
        <LeftContainer>
          <Info>
            <Title text="Uhu! Pedido confirmado" $color="yellow-dark" $variant="title-l" />
            <Text text="Agora é só aguardar que logo o café chegará até você" color="base-subtitle" $variant="text-l" />
          </Info>

          <SuccessCard />
        </LeftContainer>

        <RightContainer>
          <img src={Illustration} />
        </RightContainer>
      </SuccessCardContainer>
    </>
  )
}