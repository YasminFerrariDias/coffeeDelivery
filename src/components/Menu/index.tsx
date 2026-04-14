import { CoffeeCard } from "../CoffeeCard";
import { Title } from "../Title";
import { MenuCoffee, MenuContainer, Text } from "./styles";
import { coffees } from '../../consts/coffees';

export function Menu() {
  return (
    <MenuContainer>
      <Text>
        <Title text="Nossos Cafés" $variant="title-l" $color="base-subtitle" />
      </Text>

      <MenuCoffee>
        {
          coffees.map(({ img, tagValue, textTitle, text, price }) => (
            <CoffeeCard key={textTitle} img={img} tagValue={tagValue} textTitle={textTitle} text={text} price={price} />
          ))
        }
      </MenuCoffee>
    </MenuContainer>
  )
}
