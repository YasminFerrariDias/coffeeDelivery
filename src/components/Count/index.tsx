import { CountContainer, Operation, Result } from "./styles";
import { Number } from "../Number";
import { IconComponent } from "../IconComponent";

export function Count() {
  return (
    <CountContainer>
      <Operation>
        <IconComponent icon="Minus" ColorIcon="purple" variantSize={14} $ColorIconHover="purple-dark" />
      </Operation>

      <Result>
        <Number $variantColor="base-title" $variantText="text-m" $number={1} className='number' />
      </Result>

      <Operation>
        <IconComponent icon="Plus" ColorIcon="purple" variantSize={14} $ColorIconHover="purple-dark" />
      </Operation>
    </CountContainer>
  ) 
}
