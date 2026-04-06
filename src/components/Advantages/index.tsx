import { ShoppingCart, Clock, Box, Coffee } from 'lucide-react';
import { AdvantagesContainer } from './styles';
import type { ComponentProps } from 'react';
import { Text } from '../Text'

type TextProps = ComponentProps<typeof Text>

interface AdvantagesProps extends TextProps {
  icon: 'ShoppingCart' | 'Clock' | 'Box' | 'Coffee',
  IconVariant: 'yellow-dark' | 'yellow' | 'gray' | 'purple',
}

export function Advantages({ icon, variant, IconVariant, text, color }: AdvantagesProps) {
  const Icon = {
    ShoppingCart,
    Clock,
    Box,
    Coffee,
  }[icon]

  return (
    <AdvantagesContainer className='text-m' $IconVariant={IconVariant}>
      <span className='icon'><Icon size={20} /></span>
      <Text variant={variant} text={text} color={color} />
    </AdvantagesContainer>
  )
}
