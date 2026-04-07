import type { DefaultTheme } from "styled-components/dist/types";
import { Tag } from "../Tag";
import { AddCart } from "./styles";
import { Title } from "../Title";
import { Text } from "../Text";
import { Price } from "../Price";
import { Count } from "../Count";
import { Button } from "../Button";

import Americano from '../../assets/img/Type=Americano.svg';
import Arabe from '../../assets/img/Type=Árabe.svg';
import CafeComLeite from '../../assets/img/Type=CafécomLeite.svg';
import CafeGelado from '../../assets/img/Type=CaféGelado.svg';
import Capuccino from '../../assets/img/Type=Capuccino.svg';
import ChocolateQuente from '../../assets/img/Type=ChocolateQuente.svg';
import Cubano from '../../assets/img/Type=Cubano.svg';
import ExpressoCremoso from '../../assets/img/Type=ExpressoCremoso.svg';
import Expresso from '../../assets/img/Type=Expresso.svg';
import Havaiano from '../../assets/img/Type=Havaiano.svg';
import Irlandes from '../../assets/img/Type=Irlandês.svg';
import Latte from '../../assets/img/Type=Latte.svg';
import Macchiato from '../../assets/img/Type=Macchiato.svg';
import Mochaccino from '../../assets/img/Type=Mochaccino.svg';
import { Card } from "../Card";

interface CoffeeCardProps {
  $BackgroundColor: keyof DefaultTheme,
  $colorBackground: keyof DefaultTheme,
  color: keyof DefaultTheme
  tagValue: string[]
  variant: "tag"
  img: 'Americano'
  | 'Arabe'
  | 'CafeComLeite'
  | 'CafeGelado'
  | 'Capuccino'
  | 'ChocolateQuente'
  | 'Cubano'
  | 'ExpressoCremoso'
  | 'Expresso'
  | 'Havaiano'
  | 'Irlandes'
  | 'Latte'
  | 'Macchiato'
  | 'Mochaccino'
}

export function CoffeeCard({ img, $colorBackground, color, tagValue, variant }: CoffeeCardProps) {
  const Img = {
    Americano, Arabe, CafeComLeite, CafeGelado, Capuccino, ChocolateQuente, Cubano, ExpressoCremoso, Expresso, Havaiano, Irlandes, Latte, Macchiato, Mochaccino,
  }[img]

  return (
    <Card variant="smallRounded">
      
      <img src={Img} />
      <span className="tags">
        {
          tagValue.map((value) => (
            <Tag key={value} BackgroundColor={$colorBackground} color={color} text={value} variant={variant} />
          ))
        }
        {/* <Tag BackgroundColor={$colorBackground} color={color} text={tagValue} variant={variant} /> */}
      </span>
      <span className="title"><Title color="base-subtitle" text="Expresso Tradicional" variant="title-s" /></span>
      <span className="text"><Text text="O tradicional café feito com água quente e grãos moídos" color="base-label" variant="text-s" /></span>
      <footer>
        <Price price="9,90" />
        <AddCart>
          <Count />
          <Button icon="ShoppingCart" ColorIcon="base-card" ColorVariant="purple-dark" variant="tag" color="white" text="" />
        </AddCart>
      </footer>
    </Card>
  )
}