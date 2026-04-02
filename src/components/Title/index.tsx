import { TitleContainer } from "./styles"

interface TitleProps {
  variant: 
  | 'title-xl'
  | 'title-l'
  | 'title-m'
  | 'title-s'
  | 'title-xs'
  text: string,
}

export function Title({ variant, text }: TitleProps) {
  return (
    <TitleContainer variant={variant} className={variant}>
      {text && <span>{text}</span>}
    </TitleContainer>
  )
}
