import { CountContainer, Operation, Result } from "./styles";
import { Minus, Plus } from 'lucide-react';

export function Count() {
  return (
    <CountContainer $color="base-button">
      <Operation $color="purple">
        <Minus size={14} />
      </Operation>

      <Result>
        1
      </Result>

      <Operation $color="purple">
        <Plus size={14} />
      </Operation>
    </CountContainer>
  )
}