import { ButtonText } from "../ButtonText";
import { Button } from "../Button";
import { HeaderContainer } from "./styles";
import Logo from '../../assets/logo/logo-coffeeDelivery.svg';
import { Link } from "react-router";

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} />
      </Link>
      <div>
        <ButtonText variantSize={22} icon="MapPin" ColorIcon="purple" text="Porto Alegre, RS" ColorVariant="purple-light" color="purple-dark" $variant="text-s" />
        <Link to="/payment">
          <Button ColorVariant="yellow-light" variantSize={22} icon="ShoppingCart" ColorIcon="yellow-dark"></Button>
        </Link>
      </div>
    </HeaderContainer>
  )
} 