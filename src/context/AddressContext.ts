import { createContext } from "react";

export type AddressProps = {
  cep: string;
  rua: string;
  numero: number;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
}

type AddressContextProps = {
  address: AddressProps | null;
  setAddressState: (data: AddressProps) => void;
}

export const AddressContext = createContext<AddressContextProps>({} as AddressContextProps)