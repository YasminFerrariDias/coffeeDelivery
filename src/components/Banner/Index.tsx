import { Advantages } from "../Advantages";
import { Text } from "../Text";
import { Title } from "../Title";
import Coffee from "../../assets/img/coffee.png"
import { AdvantagesSection, BannerContainer, ImageSection, LeftAdvantages, LeftContent, RightAdvantages, RightContent, TextSection } from "./styles";

export function Banner() {
  return (
    <BannerContainer>
      <LeftContent>
        <TextSection>
          <Title text="Encontre o café perfeito para qualquer hora do dia" $variant="title-xl" $color="base-title" />
          <Text text="Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora" $variant="text-l" color="base-subtitle" />
        </TextSection>

        <AdvantagesSection>
          <LeftAdvantages>
            <Advantages ColorIcon="yellow-dark" variantSize={16} icon="ShoppingCart" IconColor="yellow-dark" text="Compra simples e segura" $variant="text-m" color="base-text" />
            <Advantages ColorIcon="yellow" variantSize={16} icon="Clock" IconColor="yellow" text="Entrega rápida e rastreada" $variant="text-m" color="base-text" />
          </LeftAdvantages>

          <RightAdvantages>
            <Advantages ColorIcon="base-text" variantSize={16} icon="Package" IconColor="base-text" text="Embalagem mantém o café intacto" $variant="text-m" color="base-text" />
            <Advantages ColorIcon="white" variantSize={16} icon="Coffee" IconColor="purple" text="O café chega fresquinho até você" $variant="text-m" color="base-text" />
          </RightAdvantages>
        </AdvantagesSection>
      </LeftContent>

      <RightContent>
        <ImageSection>
          <img src={Coffee} alt="" />
        </ImageSection>
      </RightContent>
    </BannerContainer>
  )
}