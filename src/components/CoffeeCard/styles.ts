import styled, { type DefaultTheme } from "styled-components";

interface CoffeeCardContainerProps {
  colorBackground: keyof DefaultTheme
}

export const CoffeeCardContainer = styled.div<CoffeeCardContainerProps>`
  background-color: ${(props) => props.theme[props.colorBackground]};
  width: 16rem;
  height: 19.375rem;
  border-radius: 0.5rem 3rem 0.5rem 3rem;
  margin: 1rem;
  
`;
