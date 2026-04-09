import { ShoppingCart, MapPin } from 'lucide-react';
import { ButtonContainer } from './styles';
import type { ComponentProps } from 'react';
import { Text } from '../Text'
import type { DefaultTheme } from 'styled-components/dist/types';

type TextProps = ComponentProps<typeof Text>

interface ButtonProps extends TextProps {
  icon: 'ShoppingCart' | 'MapPin',
  ColorIcon: keyof DefaultTheme
  ColorVariant: keyof DefaultTheme
} 

export function Button({ icon, ColorVariant, ColorIcon,  $variant, color, text }: ButtonProps) {
  const Icon = {
    ShoppingCart,
    MapPin,
  }[icon]

  return (
    <ButtonContainer $ColorVariant={ColorVariant} $ColorIcon={ColorIcon}>
      <Icon size={22} />
      {text && (
        <Text
          color={color}
          text={text}
          $variant={$variant}
        />
      )}
    </ButtonContainer>
  )
}
