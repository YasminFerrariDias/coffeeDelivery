import styled from "styled-components";

interface NumberContainerProps {
  $variantText:
  | 'title-m'
  | 'text-l-bold'
  | 'text-m'
  | 'text-m-bold'
  $variantColor:
  | 'base-title'
  | 'base-subtitle'
  | 'base-text'
  className?: string
  $number: number | string
}

export const NumberContainer = styled.div.attrs<NumberContainerProps>(
  ({ $variantText }) => ({
    className: $variantText,
  }),
) <NumberContainerProps>`
  color: ${(props) => props.theme[props.$variantColor]};
`;
 