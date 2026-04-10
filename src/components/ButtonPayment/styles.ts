import styled from "styled-components"

export const ButtonPaymentContainer = styled.button`
  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-button']};
  border: none;
  height: 3.188rem;
  width: 11.167rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  padding: 0 1rem;

  svg {
    display: block;
    margin-bottom: 0.1rem;
  }
`;
