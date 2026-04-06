import type { DefaultTheme } from "styled-components/dist/types";
import styled from "styled-components";

interface TagContainerProps {
  $BackgroundColor: keyof DefaultTheme
}

export const TagContainer = styled.span<TagContainerProps>`
  background: ${(props) => props.theme[props.$BackgroundColor]};
  padding: 0.25rem 0.5rem;
  border-radius: 6.25rem;
`
