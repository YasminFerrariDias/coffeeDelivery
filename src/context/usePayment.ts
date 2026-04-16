import { useContext } from "react"
import { PaymentContext } from "./PaymentContext"

export const usePayment = () => {
  return useContext(PaymentContext)
}
