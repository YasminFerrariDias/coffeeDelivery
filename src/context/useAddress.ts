import { useContext } from "react"
import { AddressContext } from "./AddressContext"

export const useAddress = () => {
  const context = useContext(AddressContext);
  return context
}