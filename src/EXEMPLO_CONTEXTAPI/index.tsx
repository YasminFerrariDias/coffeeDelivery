import type React from "react"
import { AuthProvider } from './auth'

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>
}