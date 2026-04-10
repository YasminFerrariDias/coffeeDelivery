import { AddCart, CoffeeCardContainer } from "./styles";
import { Title } from "../Title";
import { Text } from "../Text";
import { Price } from "../Price";
import { Count } from "../Count";
import { Button } from "../Button";
import { nanoid } from 'nanoid';

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
import { Tag } from "../Tag";

type TagOption =
  | 'TRADICIONAL'
  | 'COM LEITE'
  | 'GELADO'
  | 'ESPECIAL'
  | 'ALCOÓLICO'

interface CoffeeCardProps {
  tagValue: TagOption[]
  text: string
  textTitle: string
  price: number
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

export function CoffeeCard({ img, tagValue, textTitle, text, price }: CoffeeCardProps) {
  const Img = {
    Americano, Arabe, CafeComLeite, CafeGelado, Capuccino, ChocolateQuente, Cubano, ExpressoCremoso, Expresso, Havaiano, Irlandes, Latte, Macchiato, Mochaccino,
  }[img]

  return (
    <Card $variant="smallRounded"  >
      <CoffeeCardContainer>
        <img src={Img} />
        <span className="tags">
          {
            tagValue.map((value) => (
              <Tag key={nanoid()} BackgroundColor="yellow-light" tagValue={value} color="yellow" $variant="tag" />
            ))
          }

        </span>
        <span className="title"><Title text={textTitle} $color="base-subtitle" $variant="title-s" /></span>
        <span className="text"><Text text={text} color="base-label" $variant="text-s" /></span>
        <footer>
          <Price $number={price} $variant="smallLargePrice" />
          <AddCart>
            <Count />
            <Button  icon="ShoppingCart" ColorIcon="base-card" ColorVariant="purple-dark" $variant="tag" color="white" text="" />
          </AddCart>
        </footer>
      </CoffeeCardContainer>
    </Card>
  )
} 