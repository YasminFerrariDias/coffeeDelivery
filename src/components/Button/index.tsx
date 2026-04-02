import { ShoppingCart, MapPin } from 'lucide-react';
import { ButtonContainer } from './styles';

interface ButtonProps {
  icon: 'ShoppingCart' | 'MapPin',
  text?: string,
  variant: 'yellow' | 'purple'
}

export function Button({ icon, text, variant }: ButtonProps) {
  const Icon = {
    ShoppingCart,
    MapPin,
  }[icon]

  return (
    <ButtonContainer variant={variant} className='text-s'>
      <Icon size={22} />
      {text && <span>{text}</span>}
    </ButtonContainer>
  )
}
