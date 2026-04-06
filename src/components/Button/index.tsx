import { ShoppingCart, MapPin } from 'lucide-react';
import { ButtonContainer } from './styles';
import type { ComponentProps } from 'react';
import { Text } from '../Text'

type TextProps = ComponentProps<typeof Text>

interface ButtonProps extends TextProps {
  icon: 'ShoppingCart' | 'MapPin',
  colorVariant: 'yellow' | 'purple'
}

export function Button({ icon, colorVariant, variant, color, text }: ButtonProps) {
  const Icon = {
    ShoppingCart,
    MapPin,
  }[icon]

  return (
    <ButtonContainer $colorVariant={colorVariant}>
      <Icon size={22} />
      <Text color={color} text={text} variant={variant}/>
    </ButtonContainer>
  )
}
