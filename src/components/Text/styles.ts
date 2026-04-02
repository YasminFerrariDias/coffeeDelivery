import styled from "styled-components";

interface TextContainerProps {
  variant:
  | 'text-l'
  | 'text-l-bold'
  | 'text-m'
  | 'text-m-bold'
  | 'text-s'
  | 'text-xs'
}

export const TextContainer = styled.span<TextContainerProps>`
  
`;
