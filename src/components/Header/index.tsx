import { Button } from "../Button";
import { HeaderContainer } from "./styles";
import Logo from '../../assets/logo/logo-coffeeDelivery.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} />
      <div>
        <Button icon="MapPin" ColorIcon="purple" text="Porto Alegre, RS" ColorVariant="purple-light" color="purple-dark" $variant="text-s" />
        <Button icon="ShoppingCart" ColorIcon="yellow-dark" ColorVariant="yellow-light" color="background" />
      </div>
    </HeaderContainer>
  )
}