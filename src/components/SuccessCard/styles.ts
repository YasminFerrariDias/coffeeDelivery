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
