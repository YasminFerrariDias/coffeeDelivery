import type { DefaultTheme } from 'styled-components/dist/types';
import styled from "styled-components";

interface TitleContainerProps{
  $color: keyof DefaultTheme
}

export const TitleContainer = styled.span<TitleContainerProps>`
  color: ${(props) => props.theme[props.$color]}
`;
