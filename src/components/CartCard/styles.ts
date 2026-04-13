import { Link } from "react-router-dom";
import styled from "styled-components";

export const CartCardContainer = styled.div`
  padding: 2rem;
`;

export const Separate = styled.div`
  height: 1px;
  width: auto;
  background-color: ${(props) => props.theme["base-button"]};
  margin: 1rem 0;
`;

export const TotalInformation = styled.div`
  margin: 0.75rem 0;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  margin: 0.75rem 0;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.div`
  background-color: ${(props) => props.theme['yellow']};
  color: ${(props) => props.theme['white']};
  width: auto;
  height: 2.875rem;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 0.375rem;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
`;

  