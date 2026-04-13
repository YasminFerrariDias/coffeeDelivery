import styled from "styled-components"

interface ButtonPaymentContainerProps {
  $selected?: boolean;
}

export const ButtonPaymentContainer = styled.button<ButtonPaymentContainerProps>`
  color: ${(props) => props.theme['base-text']};
  border: none;
  height: 3.188rem;
  width: 11.167rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  padding: 0 1rem;

  background-color: ${(props) =>
    props.$selected ? props.theme['purple-light'] : props.theme['base-button']};

  border: ${(props) =>
    props.$selected
      ? `0.063rem solid ${props.theme['purple']}`
      : '0.063rem solid transparent'};

  &:hover {
    background: ${(props) => 
      props.$selected
        ? props.theme['purple-light']
        : props.theme['base-hover']};
  }

  svg {
    display: block;
    margin-bottom: 0.1rem;
  }
`;
