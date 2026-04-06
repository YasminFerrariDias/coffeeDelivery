import { CountContainer, Operation, Result } from "./styles";
import { Minus, Plus } from 'lucide-react';
import { Text } from '../Text'

export function Count() {
  return (
    <CountContainer $color="base-button">
      <Operation $color="purple">
        <Minus size={14} />
      </Operation>

      <Result>
        <Text color="base-title" text="1" variant="text-m" />
      </Result>

      <Operation $color="purple">
        <Plus size={14} />
      </Operation>
    </CountContainer>
  )
}