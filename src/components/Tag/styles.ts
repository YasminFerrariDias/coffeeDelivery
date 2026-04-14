import styled from "styled-components";

export const TagContainer = styled.span`
  background: ${(props) => props.theme['yellow-light']};
  padding: 0.25rem 0.5rem;
  border-radius: 999px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  height: fit-content;
`
