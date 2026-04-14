import styled from "styled-components";

export const SuccessCardContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  width: 28.5rem;
  max-width: 32.875rem;
  max-height: 16.875rem;
  border: 1px solid transparent;
  background: 
    linear-gradient(${(props) => props.theme['background']}, ${(props) => props.theme['background']}) padding-box,
    linear-gradient(white, white) padding-box,
    linear-gradient(
      90deg,
      ${(props) => props.theme['yellow']},
      ${(props) => props.theme['purple']}
    ) border-box;
  border-radius: 0.5rem 3rem;
  padding: 2.5rem;
  gap: 2rem;
  display: flex;
  flex-direction: column;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.75rem;
`;

export const Delivery = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
`;
