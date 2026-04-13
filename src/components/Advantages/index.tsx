import { AdvantagesContainer } from './styles';
import type { ComponentProps } from 'react';
import { Text } from '../Text'
import type { DefaultTheme } from 'styled-components/dist/types';
import { IconComponent } from '../IconComponent';

type TextProps = ComponentProps<typeof Text>
type IconProps = ComponentProps<typeof IconComponent>

interface AdvantagesProps extends TextProps, IconProps {
  IconColor: keyof DefaultTheme
}

export function Advantages({ text, color, $variant: variant, IconColor, icon }: AdvantagesProps) {

  return (
    <AdvantagesContainer $IconColor={IconColor}>
      <span className='icon'><IconComponent ColorIcon={IconColor} icon={icon} variantSize={20} /></span>
      <Text text={text} color={color} $variant={variant} />
    </AdvantagesContainer>
  )
}
