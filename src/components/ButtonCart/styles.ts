import styled from "styled-components";

export const ButtonCartContainer = styled.button`
  height: 2.375rem;
  width: 2.375rem;
  border-radius: 0.375rem;
  border: none;
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  padding: 0.5rem;
`;
