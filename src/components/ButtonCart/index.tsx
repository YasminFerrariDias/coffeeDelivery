import { ButtonCartContainer } from './styles';
import { ShoppingCart } from 'lucide-react';

export function ButtonCart() {

  return (
    <ButtonCartContainer>
      <ShoppingCart size={22} />
    </ButtonCartContainer>
  )
}
