import { createContext, useContext, useState } from "react";

export type UserProps = {
  name: string;
  token: string;
}

type AuthContextProps = {
  user: UserProps | null;
  login: (user: UserProps) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProps | null>(null)

  const login = (user: UserProps) => {
    setUser(user);
  }

  const logout = () => {
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthContext, useAuth }
