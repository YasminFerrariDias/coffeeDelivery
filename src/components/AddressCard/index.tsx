import { insertMaskCep } from "../../function/cep";
import { Card } from "../Card";
import { IconComponent } from "../IconComponent";
import { InputText } from "../InputText";
import { Text } from "../Text";
import { Icon, AddressCardContainer, Description, Form, RowFour, RowOne, RowThree, RowTwo, Information, SpanText } from "./styles";

export function AddressCard() {
  return (
    <AddressCardContainer>
      <Card $variant="mediumSquare">
        <Information>
          <Icon>
            <IconComponent variantSize={22} icon="MapPinned" ColorIcon="yellow" />
          </Icon>
          <Description>
            <Text text="Endereço de Entrega" color="base-subtitle" $variant="text-m" />
            <Text text="Informe o endereço onde deseja receber seu pedido" color="base-text" $variant="text-s" />
          </Description>
        </Information>
        
        <Form>
          <RowOne>
            <InputText $variableSize="small" placeholder="CEP" mask={insertMaskCep} name="CEP" />
          </RowOne>

          <RowTwo>
            <InputText $variableSize="extraLarge" placeholder="Rua" name="Rua" />
          </RowTwo>

          <RowThree>
            <InputText $variableSize="small" placeholder="Número" name="Número"/>
            <InputText $variableSize="large" placeholder="Complemento" name="Complemento" />
            <SpanText className="text-s">Opcional</SpanText>
          </RowThree>

          <RowFour>
            <InputText $variableSize="small" placeholder="Bairro" name="Bairro"/>
            <InputText $variableSize="medium" placeholder="Cidade " name="Cidade"/>
            <InputText $variableSize="mini" placeholder="UF" name="UF"/>
          </RowFour>
        </Form>
      </Card>

    </AddressCardContainer >
  )
}