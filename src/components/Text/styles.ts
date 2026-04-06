import styled, { type DefaultTheme } from "styled-components";

interface TextContainerProps{
  $color: keyof DefaultTheme;
}

export const TextContainer = styled.span<TextContainerProps>`
  color: ${(props) => props.theme[props.$color]}
`;
