import { useForm } from "react-hook-form";
import { Card } from "../Card";
import { IconComponent } from "../IconComponent";
import { InputText } from "../InputText";
import { Text } from "../Text";
import { Icon, AddressCardContainer, Description, Form, RowFour, RowOne, RowThree, RowTwo, Information, SpanText } from "./styles";
import type { AddressProps } from "../../context/AddressContext";
import { useAddress } from "../../context/useAddress";

export function AddressCard() {
  const { setAddressState } = useAddress();
  const { register, handleSubmit } = useForm<AddressProps>();

  const handleSetAddress = (data: AddressProps) => {
    console.log("DADOS DO FORM:", data);
    setAddressState(data);
  } 

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
        
        <Form onSubmit={handleSubmit(handleSetAddress)}>
          <RowOne>
            <InputText $variableSize="small" placeholder="CEP" {...register("cep")} />
          </RowOne>

          <RowTwo>
            <InputText $variableSize="extraLarge" placeholder="Rua" {...register("rua")}/>
          </RowTwo>

          <RowThree>
            <InputText $variableSize="small" placeholder="Número" {...register("numero")} />
            <InputText $variableSize="large" placeholder="Complemento" {...register("complemento")} />
            <SpanText className="text-s">Opcional</SpanText>
          </RowThree>

          <RowFour>
            <InputText $variableSize="small" placeholder="Bairro" {...register("bairro")} />
            <InputText $variableSize="medium" placeholder="Cidade " {...register("cidade")} />
            <InputText $variableSize="mini" placeholder="UF" {...register("uf")} />
          </RowFour>
          <button type="submit">Salvar</button>
        </Form>
      </Card>

    </AddressCardContainer >
  )
}