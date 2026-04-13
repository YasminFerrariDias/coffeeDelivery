import styled, { type DefaultTheme } from "styled-components";

interface IconBadgeContainerProps {
  $BackgroundVariant: keyof DefaultTheme
}

export const IconBadgeContainer = styled.div<IconBadgeContainerProps>`
  background-color: ${(props) => props.theme[props.$BackgroundVariant]};
  width: 2rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 100%;
  line-height: 0;
`;