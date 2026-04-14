import { InputTextContainer } from "./styles"

interface InputTextProps {
  placeholder: string
  mask?: (value: string) => string
  $variableSize: 'mini' | 'small' | 'medium' | 'large' | 'extraLarge'
}

export function InputText({ placeholder, $variableSize }: InputTextProps ) {
  return (
    <InputTextContainer placeholder={placeholder} $variableSize={$variableSize} name={'placeholder'} />
  )
}