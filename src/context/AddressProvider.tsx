import { useState } from "react";
import { AddressContext, type AddressProps } from "./AddressContext";

export const AddressProvider = ({ children }: { children: React.ReactNode }) => {
  const [address, setAddressState ] = useState<AddressProps | null>(null)

  const setAddress = (data: AddressProps) => {
    setAddressState(data);
  }

  return(
    <AddressContext.Provider 
      value={{ 
        address: address, 
        setAddressState: setAddress, 
      }}
    >
      {children}
    </AddressContext.Provider>
  )
}
