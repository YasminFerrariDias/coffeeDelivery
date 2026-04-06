import { ShoppingCart, Clock, Box, Coffee } from 'lucide-react';
import { AdvantagesContainer } from './styles';

interface AdvantagesProps {
  icon: 'ShoppingCart' | 'Clock' | 'Box' | 'Coffee',
  text: string,
  variant: 'yellow-dark' | 'yellow' | 'gray' | 'purple',
}

export function Advantages({ icon, text, variant}: AdvantagesProps) {
  const Icon = {
    ShoppingCart,
    Clock,
    Box,
    Coffee,
  }[icon]

  return (
    <AdvantagesContainer className='text-m' $variant={variant}>
      <span className='icon'><Icon size={20} /></span>
      {text && <span>{text}</span>}
    </AdvantagesContainer>
  )
}
