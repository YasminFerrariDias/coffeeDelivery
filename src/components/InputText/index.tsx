import { forwardRef, type InputHTMLAttributes } from "react"
import { InputTextContainer } from "./styles"

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  $variableSize: 'mini' | 'small' | 'medium' | 'large' | 'extraLarge'
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ $variableSize, ...rest }, ref) => {
  return (
    <InputTextContainer ref={ref} $variableSize={$variableSize} {...rest} />
  )
})