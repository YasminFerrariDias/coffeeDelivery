import styled from "styled-components";

interface CardContainerProps {
  $variant: 'smallRounded' | 'mediumRounded' | 'smallSquare' | 'mediumSquare' | 'mediumCart';
}

export const CardContainer = styled.div<CardContainerProps>`
  background-color: ${(props) => props.theme['base-card']};

  ${({ $variant }) => {
    switch ($variant) {
      case 'smallRounded':
        return (`
        width: 16rem;
        height: 19.375rem;
        border-radius: 0.5rem 3rem 0.5rem 3rem;
      `)

      case 'mediumRounded':
        return (`
        width: 28rem;
        height: 31.125rem;
        border-radius: 0.5rem 3rem 0.5rem 3rem;
      `)

      case 'smallSquare':
        return (`
        width: 40rem;
        height: 12.938rem;
        border-radius: 0.5rem;
      `)

      case 'mediumSquare':
        return (`
        width: 40rem;
        height: 23.25rem;
        border-radius: 0.5rem;
      `)

      case 'mediumCart':
        return (`
        width: 23rem;
        height: 5rem;
      `)

      default:
        return 'background: gray';
    }
  }}
`;
