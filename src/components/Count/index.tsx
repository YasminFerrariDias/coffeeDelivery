import { CountContainer, Operation, Result } from "./styles";
import { Number } from "../Number";
import { IconComponent } from "../IconComponent";
import { useCounter } from "../../hooks/useCounter";

export function Count() {
  const [count, addItems, removeItems] = useCounter();

  return (
    <CountContainer>
      <Operation onClick={removeItems}>
        <IconComponent icon="Minus" ColorIcon="purple" variantSize={14} $ColorIconHover="purple-dark" />
      </Operation>

      <Result>
        <Number $variantColor="base-title" $variantText="text-m" $number={count} className='number' />
      </Result>

      <Operation onClick={addItems}>
        <IconComponent icon="Plus" ColorIcon="purple" variantSize={14} $ColorIconHover="purple-dark" />
      </Operation>
    </CountContainer>
  )
} 
