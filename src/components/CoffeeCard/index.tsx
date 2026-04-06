import { Tag } from "../Tag";
import { CoffeeCardContainer } from "./styles";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src="" alt="" />
      {/* não devo colocar as informações direto no componente */}
      <Tag BackgroundColor="yellow-light" color="yellow" text="TRADICIONAL" variant="tag"/>
    </CoffeeCardContainer>
  )
}