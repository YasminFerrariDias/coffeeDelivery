import styled from "styled-components";

export const SuccessCardContainer = styled.div`
  width: 32.875rem;
  height: 16.875rem;
  border-color: linear-gradient(
    90deg,
    ${(props) => props.theme['yellow']} 0%,
    ${(props) => props.theme['purple']} 100%
  );
  border: 1px;
`;