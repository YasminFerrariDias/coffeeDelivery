import { ShoppingCart, MapPin } from 'lucide-react';
import { ButtonContainer } from './styles';

interface ButtonProps {
  icon: 'ShoppingCart' | 'MapPin',
  text?: string,
  variant: 'yellow' | 'purple'
  className?: 'tag' | 'button-g' | 'button-m' | 'text-s'
}

export function Button({ icon, text, variant, className }: ButtonProps) {
  const Icon = {
    ShoppingCart,
    MapPin,
  }[icon]

  return (
    <ButtonContainer variant={variant} className={className}>
      <Icon size={22} />
      {text && <span>{text}</span>}
    </ButtonContainer>
  )
}
