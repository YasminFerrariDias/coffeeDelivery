import { createContext } from "react";

export type AddressProps = {
  cep: string;
  rua: string;
  numero: number;
  complemento?: string;
  bairro: string;
  cidade: string;
}

type AddressContextProps = {
  address: AddressProps | null;
  setAddress: (data: AddressProps) => void;
  clearAddress: () => void;
}

export const AddressContext = createContext<AddressContextProps>({} as AddressContextProps)