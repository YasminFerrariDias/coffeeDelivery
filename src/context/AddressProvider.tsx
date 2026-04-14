import { useState } from "react";
import { AddressContext, type AddressProps } from "./AddressContext";

export const AddressProvider = ({ children }: { children: React.ReactNode }) => {
  const [address, setAddressState] = useState<AddressProps | null>(null)

  const setAddress = (data: AddressProps) => {
    setAddressState(data);

    console.log(data);
  }

  const clearAddress = () => {
    setAddressState(null)
    console.log("limpo")
  }

  return(
    <AddressContext.Provider value={{ address, setAddress, clearAddress}}>
      {children}
    </AddressContext.Provider>
  )
}
