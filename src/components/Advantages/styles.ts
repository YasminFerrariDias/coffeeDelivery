import styled, { type DefaultTheme } from "styled-components";

interface AdvantagesContainerProps {
  $IconColor: keyof DefaultTheme;
}

export const AdvantagesContainer = styled.span<AdvantagesContainerProps>`
  display: flex;
  text-align: center;
  gap: 0.75rem;
  align-items: center;

  .icon {  
    background: ${(props) => props.theme[props.$IconColor]};
    color: white;
    height: 2rem;
    width: 2rem;
    justify-content: center;
    align-items: center;
    border-radius: 62.5rem;
    padding: 0.25rem;
    display: flex;
    flex-direction: column;
  }
`