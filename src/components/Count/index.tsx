import { CountContainer, Operation, Result } from "./styles";
import { Minus, Plus } from 'lucide-react';
import { Number } from "../Number";

export function Count() {
  return (
    <CountContainer $color="base-button">
      <Operation $color="purple">
        <Minus size={14} />
      </Operation>

      <Result>
        <Number variantColor="base-title" $variantText="text-m" $number={1} className='number' />
      </Result>

      <Operation $color="purple">
        <Plus size={14} />
      </Operation>
    </CountContainer>
  )
}