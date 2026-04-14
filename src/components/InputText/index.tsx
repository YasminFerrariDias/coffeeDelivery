import { InputTextContainer } from "./styles"

interface InputTextProps {
  placeholder: string
  mask?: (value: string) => string
  $variableSize: 'mini' | 'small' | 'medium' | 'large' | 'extraLarge'
  name: string
}

export function InputText({ placeholder, $variableSize, name }: InputTextProps ) {
  return (
    <InputTextContainer placeholder={placeholder} $variableSize={$variableSize} className={name} />
  )
}