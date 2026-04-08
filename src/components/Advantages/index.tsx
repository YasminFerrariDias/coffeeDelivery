import { ShoppingCart, Clock, Box, Coffee } from 'lucide-react';
import { AdvantagesContainer } from './styles';
import type { ComponentProps } from 'react';
import { Text } from '../Text'
import type { DefaultTheme } from 'styled-components/dist/types';

type TextProps = ComponentProps<typeof Text>

interface AdvantagesProps extends TextProps {
  icon: 'ShoppingCart' | 'Clock' | 'Box' | 'Coffee',
  IconColor: keyof DefaultTheme
}

export function Advantages({ icon, text, color, $variant: variant, IconColor }: AdvantagesProps) {
  const Icon = {
    ShoppingCart,
    Clock,
    Box,
    Coffee,
  }[icon]

  return (
    <AdvantagesContainer $IconColor={IconColor}>
      <span className='icon'><Icon size={20} /></span>
      <Text text={text} color={color} $variant={variant} />
    </AdvantagesContainer>
  )
}
