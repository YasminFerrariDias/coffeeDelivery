import type { ReactNode } from "react";
import { CardContainer } from "./styles";

interface CardProps {
  $variant: 'smallRounded' | 'mediumRounded' | 'smallSquare' | 'mediumSquare' | 'mediumCart';
  children: ReactNode
  className?: string
  onClick?: () => void;
}

export function Card({ children, $variant, className }: CardProps) {
  return (
    <CardContainer $variant={$variant} className={className}>
      {children}
    </CardContainer>
  ) 
} 