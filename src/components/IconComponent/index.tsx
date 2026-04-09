import { MapPin, MapPinned, ShoppingCart } from "lucide-react";
import { IconComponentContainer } from "./styles";
import type { DefaultTheme } from "styled-components/dist/types";

interface IconComponentProps {
  icon: 'ShoppingCart' | 'MapPin' | 'MapPinned',
  ColorIcon: keyof DefaultTheme
}

export function IconComponent({ icon, ColorIcon }: IconComponentProps) {
  const Icon = {
    ShoppingCart,
    MapPin,
    MapPinned,
  }[icon]

  return (
    <IconComponentContainer $ColorIcon={ColorIcon}>
      <Icon size={22} />
    </IconComponentContainer>
  )
}