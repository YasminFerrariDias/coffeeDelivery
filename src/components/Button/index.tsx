import { ButtonContainer } from './styles';
import type { ComponentProps } from 'react';
import type { DefaultTheme } from 'styled-components/dist/types';
import { IconComponent } from '../IconComponent';

type IconProps = ComponentProps<typeof IconComponent>

interface ButtonProps extends IconProps {
  ColorVariant: keyof DefaultTheme
  children?: React.ReactNode
  $ColorHover?: keyof DefaultTheme
  onClick?: () => void;
}

export function Button({ ColorVariant, icon, ColorIcon, variantSize, children, $ColorHover, onClick }: ButtonProps) {
  return (
    <ButtonContainer $ColorVariant={ColorVariant} $ColorHover={$ColorHover} onClick={onClick}>
      <IconComponent icon={icon} ColorIcon={ColorIcon} variantSize={variantSize}/>
      {children}
    </ButtonContainer>
  )
}
