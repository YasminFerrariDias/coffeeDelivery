import type { DefaultTheme } from "styled-components/dist/types";
import { IconBadgeContainer } from "./styles";
import { IconComponent } from "../IconComponent";
import type { icons } from "../../consts/icons";

type Icon = keyof typeof icons

interface IconBadgeProps {
  $BackgroundVariant: keyof DefaultTheme;
  icon: Icon;
}

export function IconBadge({ $BackgroundVariant, icon }: IconBadgeProps) {
  return (
    <IconBadgeContainer $BackgroundVariant={$BackgroundVariant}>
      <IconComponent icon={icon} ColorIcon="white" variantSize={16} />
    </IconBadgeContainer>
  )
}