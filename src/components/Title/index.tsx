import type { DefaultTheme } from "styled-components/dist/types"
import { TitleContainer } from "./styles"

interface TitleProps {
  $variant: 
  | 'title-xl'
  | 'title-l'
  | 'title-m'
  | 'title-s'
  | 'title-xs'
  text: string,
  $color: keyof DefaultTheme
}

export function Title({ $variant, text, $color }: TitleProps) {
  return (
    <TitleContainer className={$variant} $color={$color}>
      {text && <span>{text}</span>}
    </TitleContainer>
  )
}
