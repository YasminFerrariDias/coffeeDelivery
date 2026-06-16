import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    overflow-x: hidden;
    width: 100%;
    max-width: 100%;
  }
`;

export const MenuContainer = styled.div`
  width: 70rem;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 5rem;
  padding: 0 2rem; 
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    padding: 0 1rem;
  }
`;

export const Text = styled.div`
  margin-bottom: 2rem;
  margin-top: 2rem;
  width: 100%;
  max-width: 100%;

  @media (max-width: 1024px) {
    padding: 0 1rem;
  }

  @media (max-width: 700px) {
    padding: 0 1rem;
  }

  @media (max-width: 560px) {
    padding: 0 0.5rem;
  }
`;

export const MenuCoffee = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  align-items: center;
  justify-items: center;
  text-align: center;
  width: 100%;
  max-width: 100%;
 
  @media (max-width: 1224px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  @media (max-width: 924px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;