
import styled, { type DefaultTheme } from "styled-components";

interface IconComponentContainerProps{
  $ColorIcon: keyof DefaultTheme
  $ColorIconHover?: keyof DefaultTheme,
}

export const IconComponentContainer  = styled.div<IconComponentContainerProps>`
  color: ${(props) => props.theme[props.$ColorIcon]};

  &:hover  {
    color: ${(props) => props.theme[props.$ColorIconHover || props.$ColorIcon]};
  }
`