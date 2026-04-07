import type { DefaultTheme } from "styled-components/dist/types";
import { Tag } from "../Tag";
import { CoffeeCardContainer } from "./styles";
import { Title } from "../Title";

interface CoffeeCardProps {
  colorBackground: keyof DefaultTheme
}

export function CoffeeCard({ colorBackground }: CoffeeCardProps) {
  return (
    <CoffeeCardContainer colorBackground={colorBackground}>
      <img src="" alt="" />
      {/* não devo colocar as informações direto no componente */}
      <Tag BackgroundColor="yellow-light" color="yellow" text="TRADICIONAL" variant="tag"/>
      <Title color="base-subtitle" text="Expresso Tradicional" variant="title-s" />
    </CoffeeCardContainer>
  )
}