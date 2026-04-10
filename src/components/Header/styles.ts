import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['background']};
  height: 6.5rem;
  width: 100%;

  position: sticky;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 53rem;

  img {
    width: 5.309rem;
    height: 2.5rem;
  }

  div {
    display: flex;
    gap: 0.75rem;
  }
`;