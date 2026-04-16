import { PAYMENT_OPTIONS } from "../../consts/paymentType";
import { useAddress } from "../../context/useAddress";
import { usePayment } from "../../context/usePayment";

import { IconBadge } from "../IconBadge";
import { Text } from "../Text";
import { Info, InfoItem, SuccessCardContainer, Delivery } from "./styles";

export function SuccessCard() {
  const { address } = useAddress();
  const { payment } = usePayment();

  return (
    <SuccessCardContainer>
      <InfoItem>
        <IconBadge icon={"MapPin"} $BackgroundVariant="purple" />
        <Info>
          <Delivery>
            <Text text="Entrega em" color="base-text" $variant="text-m" />
            <Text text={ address?.rua + ", " + address?.numero} color="base-text" $variant="text-m-bold" />
          </Delivery>
          <Text text={address?.bairro + " - " + address?.cidade + ", " + address?.uf} color="base-text" $variant="text-m" />
        </Info>
      </InfoItem>

      <InfoItem>
        <IconBadge icon={"Clock"} $BackgroundVariant="yellow" />
        <Info>
          <Text text="Previsão de entrega" color="base-text" $variant="text-m" />
          <Text text="20 min - 30 min" color="base-text" $variant="text-m-bold" />
        </Info>
      </InfoItem>

      <InfoItem>
        <IconBadge icon={"DollarSign"} $BackgroundVariant="yellow-dark" />
        <Info>
          <Text text="Pagamento na entrega" color="base-text" $variant="text-m" />
          <Text text={payment?.payment ? PAYMENT_OPTIONS[payment.payment].label : "Não selecionado"} color="base-text" $variant="text-m-bold" />
        </Info>
      </InfoItem>
    </ SuccessCardContainer>
  )
}