import { CountContainer, Operation, Result } from "./styles";
import { Number } from "../Number";
import { IconComponent } from "../IconComponent";

interface CountProps{
  count: number;
  onRemove: () => void
  onAdd: () => void;
}

export function Count({ count, onRemove, onAdd }: CountProps) {
  return (
    <CountContainer>
      <Operation onClick={onRemove}>
        <IconComponent icon="Minus" ColorIcon="purple" variantSize={14} $ColorIconHover="purple-dark" />
      </Operation>

      <Result>
        <Number $variantColor="base-title" $variantText="text-m" $number={count} className='number' />
      </Result>

      <Operation onClick={onAdd}>
        <IconComponent icon="Plus" ColorIcon="purple" variantSize={14} $ColorIconHover="purple-dark" />
      </Operation>
    </CountContainer>
  )
} 
