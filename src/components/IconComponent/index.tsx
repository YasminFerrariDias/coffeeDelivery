import { Coffee, Package, Clock, CreditCard, DollarSign, MapPin, MapPinned, ShoppingCart, Landmark, Banknote, Trash2 } from "lucide-react";
import { IconComponentContainer } from "./styles";
import type { DefaultTheme } from "styled-components/dist/types";

interface IconComponentProps {
  icon: 'Coffee' | 'Package' | 'Clock' | 'ShoppingCart' | 'MapPin' | 'MapPinned' | 'DollarSign' | 'CreditCard' | 'Landmark' | 'Banknote' | 'Trash2',
  ColorIcon: keyof DefaultTheme,
  variantSize: 22 | 20 | 16,
  className?: string
}

export function IconComponent({ icon, className, ColorIcon, variantSize = 22 }: IconComponentProps) {
  const Icon = {
    Coffee,
    Package,
    ShoppingCart,
    MapPin,
    MapPinned,
    DollarSign,
    CreditCard,
    Landmark,
    Banknote,
    Trash2,
    Clock,
  }[icon]

  return (
    <IconComponentContainer $ColorIcon={ColorIcon} className={className} >
      <Icon size={variantSize} />
    </IconComponentContainer>
  )
}