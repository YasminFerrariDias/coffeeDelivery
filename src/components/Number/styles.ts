import styled from "styled-components";

interface NumberContainerProps {
  $variant:
  | 'title-m'
  | 'text-l-bold'
  | 'text-m'
  | 'text-m-bold'
  className?: string
  $number: number
}

export const NumberContainer = styled.div.attrs<NumberContainerProps>(
  ({ $variant }) => ({
    className: $variant,
  }),
)<NumberContainerProps>``;
