import type { DefaultTheme } from "styled-components/dist/types";
import { IconBadgeContainer } from "./styles";
import { IconComponent } from "../IconComponent";

interface IconBadgeProps {
  $BackgroundVariant: keyof DefaultTheme;
  icon: 'Coffee' | 'Package' | 'Clock' | 'ShoppingCart' | 'MapPin' | 'MapPinned' | 'DollarSign' | 'CreditCard' | 'Landmark' | 'Banknote' | 'Trash2',
}

export function IconBadge({ $BackgroundVariant, icon }: IconBadgeProps) {
  return (
    <IconBadgeContainer $BackgroundVariant={$BackgroundVariant}>
      <IconComponent icon={icon} ColorIcon="white" variantSize={16} />
    </IconBadgeContainer>
  )
}