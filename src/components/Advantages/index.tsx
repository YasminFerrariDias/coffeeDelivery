import { AdvantagesContainer } from './styles';
import type { ComponentProps } from 'react';
import { Text } from '../Text'
import type { DefaultTheme } from 'styled-components/dist/types';
import { IconComponent } from '../IconComponent';
import { IconBadge } from '../IconBadge';

type TextProps = ComponentProps<typeof Text>
type IconProps = ComponentProps<typeof IconComponent>

interface AdvantagesProps extends TextProps, IconProps {
  IconColor: keyof DefaultTheme
}

export function Advantages({ text, color, $variant: variant, IconColor, icon }: AdvantagesProps) {

  return (
    <AdvantagesContainer $IconColor={IconColor}>
      <IconBadge icon={icon} $BackgroundVariant={IconColor} />
      <Text text={text} color={color} $variant={variant} />
    </AdvantagesContainer>
  )
}
