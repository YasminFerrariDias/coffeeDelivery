import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  margin: 0.5rem;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  img {
    margin-bottom: 0.7rem;
    margin-top: -1.5rem;
    width: 7.5rem;
    height: 7.5rem;
  } 
  
  .tags {
    display: flex;
    gap: 0.25rem
  }

  .title {
    margin-top: 1rem;
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0.5rem;
  } 

  footer {
    display: flex;
    justify-content: space-between; 
    align-items: center;           
    margin-top: auto; 
    padding: 1rem;
    width: 80%;
    gap: 1rem;
  }
`;

export const AddCart = styled.div`
  display: flex;
  gap: 0.5rem;
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

