/* import { AppProvider } from './context'; */

import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import type React from "react"
import { Outlet } from 'react-router-dom';
import { AddressProvider } from './context/AddressProvider';
import { PaymentProvider } from './context/PaymenProvider';

export function App({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AddressProvider>
        <PaymentProvider>
          <Outlet />
          {children}
        </PaymentProvider>
      </AddressProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
