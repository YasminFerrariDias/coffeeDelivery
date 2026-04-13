import { styled } from 'styled-components';

export const CountContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 2.375rem;
  width: 4.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 0.375rem;
`;

export const Operation = styled.section``;

export const Result = styled.section`
  .number {
    display: flex;
    flex-direction: row;
  }
`;
