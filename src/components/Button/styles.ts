import styled from "styled-components";

interface ButtonContainerProps {
  $colorVariant: 'purple' | 'yellow'
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

  background: ${(props) =>
    props.$colorVariant === 'yellow'
      ? props.theme['yellow-light']
      : props.theme['purple-light']};

  color: ${(props) =>
    props.$colorVariant === 'yellow'
      ? props.theme['yellow-dark']
      : props.theme['purple']};
`;
