import styled from "styled-components";

export const CoffeeCartCardContainer = styled.div<{ $img: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  padding: 0.5rem 0.25rem;
`;

export const ImgStyle = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const Value = styled.div`
  padding: 0.5rem 0.25rem;
`;


export const CountContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 2.375rem;
  width: 4.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 0.375rem;
`;

export const Operation = styled.section``;

export const Result = styled.section`
  .number {
    display: flex;
    flex-direction: row;
  }
`;


