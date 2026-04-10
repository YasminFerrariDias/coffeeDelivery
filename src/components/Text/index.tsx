import type { DefaultTheme } from "styled-components"
import { TextContainer } from "./styles"

interface TextProps {
  $variant?: 
  | 'text-l'
  | 'text-l-bold'
  | 'text-m'
  | 'text-m-bold'
  | 'text-s'
  | 'text-xs'
  | 'tag'
  | 'button-g'
  | 'button-s'
  text?: string,
  color: keyof DefaultTheme;
}

export function Text({ $variant: $variant, text, color}: TextProps) {
  return (
    <TextContainer className={$variant} $color={color}>
      {text && <span>{text}</span>}
    </TextContainer>
  )
}
 