import { TextContainer } from "./styles"

interface TextProps {
  variant: 
  | 'title-xl'
  | 'title-l'
  | 'title-m'
  | 'title-s'
  | 'title-xs'
  | 'text-l'
  | 'text-l-bold'
  | 'text-m'
  | 'text-m-bold'
  | 'text-s'
  | 'text-xs'
  | 'tag'
  | 'button-g'
  | 'button-m'
  text: string,
}

export function Text({ variant, text }: TextProps) {
  return (
    <TextContainer variant={variant} className={variant}>
      {text && <span>{text}</span>}
    </TextContainer>
  )
}
