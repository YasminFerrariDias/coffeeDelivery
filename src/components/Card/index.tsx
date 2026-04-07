import { CardContainer } from "./styles";

interface CardProps {
  variant: 'smallRounded' | 'mediumArounded' | 'smallSquare' | 'mediumSquare';
}

export function Card({ variant }: CardProps) {
  return (
    <CardContainer variant={variant} />
  )
} 