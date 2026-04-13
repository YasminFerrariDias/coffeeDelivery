import { ButtonContainer } from './styles';
import type { ComponentProps } from 'react';
import { Text } from '../Text'
import type { DefaultTheme } from 'styled-components/dist/types';
import { IconComponent } from '../IconComponent';

type TextProps = ComponentProps<typeof Text>
type IconProps = ComponentProps<typeof IconComponent>

interface ButtonProps extends TextProps, IconProps {
  ColorVariant: keyof DefaultTheme
  children?: React.ReactNode
}

export function Button({ ColorVariant, icon, ColorIcon, $variant, color, text, variantSize, children }: ButtonProps) {
  return (
    <ButtonContainer $ColorVariant={ColorVariant}>
      <IconComponent icon={icon} ColorIcon={ColorIcon} variantSize={variantSize}/>
      {text && (
        <Text
          color={color}
          text={text}
          $variant={$variant}
        />
      )}
      {children}
    </ButtonContainer>
  )
}
