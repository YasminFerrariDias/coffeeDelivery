import { Plus, Minus, Coffee, Package, Clock, CreditCard, DollarSign, MapPin, MapPinned, ShoppingCart, Landmark, Banknote, Trash2 } from "lucide-react";
import { IconComponentContainer } from "./styles";
import type { DefaultTheme } from "styled-components/dist/types";

interface IconComponentProps {
  icon: 'Plus' | 'Minus' | 'Coffee' | 'Package' | 'Clock' | 'ShoppingCart' | 'MapPin' | 'MapPinned' | 'DollarSign' | 'CreditCard' | 'Landmark' | 'Banknote' | 'Trash2',
  ColorIcon: keyof DefaultTheme,
  variantSize: 14 | 16 | 20 | 22
  className?: string
  $ColorIconHover?: keyof DefaultTheme,
}

export function IconComponent({ icon, className, ColorIcon, variantSize = 22, $ColorIconHover }: IconComponentProps) {
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
    Minus,
    Plus,
  }[icon]

  return (
    <IconComponentContainer $ColorIcon={ColorIcon} className={className} $ColorIconHover={$ColorIconHover} >
      <Icon size={variantSize} />
    </IconComponentContainer>
  )
}