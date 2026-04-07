import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  margin: 1rem;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  img {
    margin-bottom: 0.7rem;
    margin-top: -1rem;
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
    margin: 1rem;
    margin-top: 0.5rem;
  }

  footer {
    display: flex;
    justify-content: space-between; 
    align-items: center;           
    margin-top: auto; 
    padding: 1rem;
    width: 80%;
  }
`;

export const AddCart = styled.div`
  display: flex;
  gap: 0.5rem;

`;


