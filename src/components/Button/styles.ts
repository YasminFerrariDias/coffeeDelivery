import styled from "styled-components";
import type { DefaultTheme } from "styled-components/dist/types";

interface ButtonContainerProps {
  $ColorVariant: keyof DefaultTheme
  $ColorIcon: keyof DefaultTheme
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  height: 2.375rem;
  min-width: 2.375rem;
  width: auto;
  border-radius: 0.375rem;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 0.25rem;
  padding: 0.5rem;
  border: none;

  background: ${(props) => props.theme[props.$ColorVariant]};
  color: ${(props) => props.theme[props.$ColorIcon]}
`;
 