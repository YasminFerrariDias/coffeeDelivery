
import styled, { type DefaultTheme } from "styled-components";

interface IconComponentContainerProps{
  $ColorIcon: keyof DefaultTheme
}

export const IconComponentContainer  = styled.div<IconComponentContainerProps>`
  color: ${(props) => props.theme[props.$ColorIcon]};
`