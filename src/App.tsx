/* import { Outlet } from 'react-router-dom' */

import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import type React from "react"
import { AppProvider } from './context';
import Page from './pages/page';

export function App({
  children
} : {
 children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/*   <Outlet /> */}
      <AppProvider>
        {children}
        <Page />
      </AppProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
