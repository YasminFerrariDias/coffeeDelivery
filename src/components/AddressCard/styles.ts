import styled from "styled-components";

export const AddressCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Information = styled.div`
  margin: 2.5rem 2.5rem 2rem 2.5rem;
  display: flex;
  gap: 0.5rem;
`;

export const Icon = styled.div`
  flex-direction: column;
  display: flex;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

`;

export const Form = styled.div`
  width: 35rem;
  height: 13.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin: 2.5rem;
`;

export const RowOne = styled.div`
`;

export const RowTwo = styled.div`
`;

export const RowThree = styled.div`
  gap: 0.75rem;
  display: flex;
  position: relative;
  width: 100%;
`;

export const RowFour = styled.div`
  gap: 0.75rem;
  display: flex;
`;

export const SpanText = styled.span`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  font-style: italic;
  color: ${(props) => props.theme['base-label']};
  pointer-events: none;
`;