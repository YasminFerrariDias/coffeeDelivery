import { CoffeeCard } from "../CoffeeCard";
import { Title } from "../Title";
import { MenuCoffee, MenuContainer, Text } from "./styles";

export function Menu() {
  return (
    <MenuContainer>
      <Text>
        <Title text="Nossos Cafés" variant="title-l" color="base-subtitle" />
      </Text>

      <MenuCoffee>
        <CoffeeCard img="Expresso" tagValue={["TRADICIONAL"]} textTitle="Expresso Tradicional" text="O tradicional café feito com água quente e grãos moídos" price={9.90} />
        <CoffeeCard img="Americano" tagValue={["TRADICIONAL"]} textTitle="Expresso Americano" text="Expresso diluído, menos intenso que o tradicional" price={9.90} />
        <CoffeeCard img="ExpressoCremoso" tagValue={["TRADICIONAL"]} textTitle="Expresso Cremoso" text="Café expresso tradicional com espuma cremosa" price={9.90} />
        <CoffeeCard img="CafeGelado" tagValue={["TRADICIONAL", "GELADO"]} textTitle="Expresso Gelado" text="Bebeida preparada com café expresso e cubos de gelo" price={9.90} />
        <CoffeeCard img="CafeComLeite" tagValue={["TRADICIONAL", "COM LEITE"]} textTitle="Café com Leite" text="Meio a meio de expresso tradicional com leite vaporizado" price={9.90} />
        <CoffeeCard img="Latte" tagValue={["TRADICIONAL", "COM LEITE"]} textTitle="Latte" text="Uma dose de café expresso com o dobro de leite e espuma cremos a" price={9.90} />
        <CoffeeCard img="Capuccino" tagValue={["TRADICIONAL", "COM LEITE"]} textTitle="Capuccino" text="Bebida com canela feita de doses iguais de café, leite e espuma" price={9.90} />
        <CoffeeCard img="Macchiato" tagValue={["TRADICIONAL", "COM LEITE"]} textTitle="Macchiato" text="Café expresso misturado com um pouco de leite quente e espuma" price={9.90} />
        <CoffeeCard img="Mochaccino" tagValue={["TRADICIONAL", "COM LEITE"]} textTitle="Mocaccino" text="Café expresso com calda de chocolate, pouco leite e espuma" price={9.90} />
        <CoffeeCard img="ChocolateQuente" tagValue={["ESPECIAL", "COM LEITE"]} textTitle="Chocolate Quente" text="Bebida feita com chocolate dissolvido no leite quente e café" price={9.90} />
        <CoffeeCard img="Cubano" tagValue={["ESPECIAL", "ALCOÓLICO", "GELADO"]} textTitle="Cubano" text="Drink geladode café expresso com rum, creme de leite e hortelã" price={9.90} />
        <CoffeeCard img="Havaiano" tagValue={["ESPECIAL"]} textTitle="Havaiano" text=" Bebida adocicada preparada com café e leite de coco" price={9.90} />
        <CoffeeCard img="Arabe" tagValue={["ESPECIAL"]} textTitle="Árabe" text="Bebida preparada com grãos de café árabe e especiarias" price={9.90} />
        <CoffeeCard img="Irlandes" tagValue={["ESPECIAL", "ALCOÓLICO"]} textTitle="Irlândes" text="Bebida base de café, uísque irlândes, açucar e chantilly" price={9.90} />
      </MenuCoffee>
    </MenuContainer>
  )
}