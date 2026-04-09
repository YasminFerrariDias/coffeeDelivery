import styled from "styled-components";

interface PriceContainerProps {
  $variant: 'smallPrice' | 'mediumPrice' | 'largePrice' | 'smallLargePrice' 
}

export const PriceContainer = styled.div<PriceContainerProps>`
  display: flex;      
  gap: 0.2rem;            
  align-items: baseline;
`

export const Text = styled.span`
  line-height: 1;      
  margin: 0;           
`;

export const number = styled.span`
  line-height: 1;
  margin: 0;
`;