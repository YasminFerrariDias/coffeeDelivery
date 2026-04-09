import { Card } from "../Card";
import { InputText } from "../InputText";
import { Text } from "../Text";
import { AddressCardContainer, Description, Form, RowFour, RowOne, RowThree, RowTwo } from "./styles";

export function AddressCard() {
  return (
    <AddressCardContainer>
      <Card $variant="mediumSquare">
        <Description>
          <Text text="Endereço de Entrega" color="base-subtitle" $variant="text-m" />
          <Text text="Informe o endereço onde deseja receber seu pedido" color="base-text" $variant="text-s" />
        </Description>

        <Form>
          <RowOne>
            <InputText $variableSize="small" placeholder="CEP" />
          </RowOne>

          <RowTwo>
            <InputText $variableSize="extraLarge" placeholder="Rua" />
          </RowTwo>

          <RowThree>
            <InputText $variableSize="small" placeholder="Número" />
            <InputText $variableSize="large" placeholder="Complemento" />
          </RowThree>

          <RowFour>
            <InputText $variableSize="small" placeholder="Bairro" />
            <InputText $variableSize="medium" placeholder="Cidade " />
            <InputText $variableSize="mini" placeholder="UF" />
          </RowFour>
        </Form>
      </Card>

    </AddressCardContainer >
  )
}