import type { DefaultTheme } from "styled-components/dist/types";
import { styled } from 'styled-components';

interface CountContainerProps {
  $color: keyof DefaultTheme
}

export const CountContainer = styled.div<CountContainerProps>`
  display: flex;
  flex-direction: row;
  height: 2.375rem;
  width: 4.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  background-color: ${(props) => props.theme[props.$color]};
  border-radius: 0.375rem;
`

export const Operation = styled.section<CountContainerProps>`
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme[props.$color]};
`

export const Result = styled.section`
  .number {
    display: flex;
    flex-direction: row;
  }
`
