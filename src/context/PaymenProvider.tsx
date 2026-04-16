import { useState } from 'react';
import { PaymentContext, type PaymentProps } from './PaymentContext';

export const PaymentProvider = ({ children }: { children: React.ReactNode }) => {
  const [payment, setPaymentState] = useState<PaymentProps | null>(null)

  const setPayment = (data: PaymentProps) => {
    setPaymentState(data)
  }

  return (
    <PaymentContext.Provider
      value={{
        payment: payment,
        setPaymentState: setPayment
      }}
    >
      {children}
    </PaymentContext.Provider>
  )
}
