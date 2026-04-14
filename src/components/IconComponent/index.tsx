import { IconComponentContainer } from "./styles";
import type { DefaultTheme } from "styled-components/dist/types";
import { icons } from "../../consts/icons";

type Icon = keyof typeof icons

interface IconComponentProps {
  icon: Icon,
  ColorIcon: keyof DefaultTheme,
  variantSize: 14 | 16 | 20 | 22
  className?: string
  $ColorIconHover?: keyof DefaultTheme,
}

export function IconComponent({ icon, className, ColorIcon, variantSize = 22, $ColorIconHover }: IconComponentProps) {
  const Icon = icons[icon]

  return (
    <IconComponentContainer $ColorIcon={ColorIcon} className={className} $ColorIconHover={$ColorIconHover} >
      <Icon size={variantSize} />
    </IconComponentContainer>
  )
}