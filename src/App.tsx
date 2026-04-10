import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Success } from './pages/Success'

{/*
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
*/ }

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/*
      <Home />
      <Checkout />
      */}

      <Success />

      <GlobalStyle />
    </ThemeProvider>
  )
}
