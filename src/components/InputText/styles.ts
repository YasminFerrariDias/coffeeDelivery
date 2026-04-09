import styled from "styled-components";

interface InputTextContainerProps {
  $variableSize: 'mini' | 'small' | 'medium' | 'large' | 'extraLarge'
}

export const InputTextContainer = styled.input<InputTextContainerProps>`
  padding: 0.6rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  border-radius: 0.25rem;
  outline: none;

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
        width: 3.75rem;
      `)

      case 'small':
        return (`
        width: 12.5rem;
      `)

      case 'medium':
        return (`
        width: 17.25rem;
      `)

      case 'large':
        return (`
        width: 21.75rem;
      `)

      case 'extraLarge':
        return (`
        width: 35rem;
      `)

      default:
        return (`
        width: 6rem;
      `)
    }
  }}

  
`;