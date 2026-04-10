import { CreditCard, DollarSign, MapPin, MapPinned, ShoppingCart, Landmark, Banknote, Trash2 } from "lucide-react";
import { IconComponentContainer } from "./styles";
import type { DefaultTheme } from "styled-components/dist/types";

interface IconComponentProps {
  icon: 'ShoppingCart' | 'MapPin' | 'MapPinned' | 'DollarSign' | 'CreditCard' | 'Landmark' | 'Banknote' | 'Trash2',
  ColorIcon: keyof DefaultTheme,
  variantSize: 22 | 16,
  className?: string
}

export function IconComponent({ icon, ColorIcon, variantSize = 22 }: IconComponentProps) {
  const Icon = {
    ShoppingCart,
    MapPin,
    MapPinned,
    DollarSign,
    CreditCard,
    Landmark,
    Banknote,
    Trash2,
  }[icon]

  return (
    <IconComponentContainer $ColorIcon={ColorIcon} >
      <Icon size={variantSize} />
    </IconComponentContainer>
  )
}