import { TextContainer } from "./styles"

interface TextProps {
  variant: 
  | 'text-l'
  | 'text-l-bold'
  | 'text-m'
  | 'text-m-bold'
  | 'text-s'
  | 'text-xs'
  text: string,
}

export function Text({ variant, text }: TextProps) {
  return (
    <TextContainer variant={variant} className={variant}>
      {text && <span>{text}</span>}
    </TextContainer>
  )
}
