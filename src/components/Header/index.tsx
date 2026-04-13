import { Button } from "../Button";
import { HeaderContainer } from "./styles";
import Logo from '../../assets/logo/logo-coffeeDelivery.svg';
import { Link } from "react-router";


export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} />
      <div>
        <Button variantSize={22} icon="MapPin" ColorIcon="purple" text="Porto Alegre, RS" ColorVariant="purple-light" color="purple-dark" $variant="text-s" />
        <Link to="/payment">
          <Button variantSize={22} icon="ShoppingCart" ColorIcon="yellow-dark" ColorVariant="yellow-light" color="background"></Button>
        </Link>
      </div>
    </HeaderContainer>
  )
} 