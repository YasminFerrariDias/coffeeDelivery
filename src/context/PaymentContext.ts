import { PAYMENT_OPTIONS } from './../consts/paymentType';
import { createContext } from "react";

type PaymentType = keyof typeof PAYMENT_OPTIONS;

export type PaymentProps = {
  payment: PaymentType;
}

type PaymentContextProps = {
  payment: PaymentProps | null;
  setPaymentState: (data: PaymentProps) => void;
}

export const PaymentContext = createContext<PaymentContextProps>({} as PaymentContextProps)
