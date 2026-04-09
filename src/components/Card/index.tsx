import type { ReactNode } from "react";
import { CardContainer } from "./styles";

interface CardProps {
  $variant: 'smallRounded' | 'mediumRounded' | 'smallSquare' | 'mediumSquare';
  children: ReactNode
}

export function Card({ children, $variant }: CardProps) {
  return (
    <CardContainer $variant={$variant}>
      {children}
    </CardContainer>
  ) 
} 