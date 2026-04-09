import styled from "styled-components";

interface InputTextContainerProps {
  $variableSize: 'mini' | 'small' | 'medium' | 'large' | 'extraLarge'
}

export const InputTextContainer = styled.input<InputTextContainerProps>`
  padding-left: 0.5rem; 
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  border-radius: 0.25rem;
  outline: none;
  height: 2.625rem; 

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  ${({ $variableSize }) => {
    switch ($variableSize) {
      case 'mini':
        return (`
        width: 3rem;
      `)

      case 'small':
        return (`
        width: 11.75rem;
      `)

      case 'medium':
        return (`
        width: 16.5rem;
      `)

      case 'large':
        return (`
        width: 21rem;
      `)

      case 'extraLarge':
        return (`
        width: 34.25rem;
      `)

      default:
        return (`
        width: 6 rem;
      `)
    }
  }}

  
`;