import styled from "styled-components";

export const SuccessCardContainer = styled.div`
  width: 32.875rem;
  height: 16.875rem;
  border: 1px solid transparent;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(
      90deg,
      ${(props) => props.theme['yellow']},
      ${(props) => props.theme['purple']}
    ) border-box;
  border-radius: 0.5rem 3rem;
`;

export const InfoItem = styled.div`
  display: flex;
  margin: 2.25rem;
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
