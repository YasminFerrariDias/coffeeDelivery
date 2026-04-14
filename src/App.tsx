/* import { AppProvider } from './context'; */

import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import type React from "react"
import { Outlet } from 'react-router-dom';

export function App({
  children
} : {
 children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={defaultTheme}>
        <Outlet /> 
        {children}
        {/* <AppProvider></AppProvider>  */}
      <GlobalStyle />
    </ThemeProvider>
  )
}
