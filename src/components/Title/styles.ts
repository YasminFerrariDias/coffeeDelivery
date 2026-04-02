import styled from "styled-components";

interface TitleContainerProps {
  variant:
  | 'title-xl'
  | 'title-l'
  | 'title-m'
  | 'title-s'
  | 'title-xs'
  | 'text-l'
  | 'text-l-bold'
  | 'text-m'
  | 'text-m-bold'
  | 'text-s'
  | 'text-xs'
  | 'tag'
  | 'button-g'
  | 'button-m'
}

export const TitleContainer = styled.span<TitleContainerProps>`
  
`;
