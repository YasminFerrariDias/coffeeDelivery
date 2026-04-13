import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Checkout } from './pages/Checkout'

{/*
import { Home } from './pages/Home'
import { Success } from './pages/Success'

*/ }

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/*
      <Home />
      <Success />
      */}
<Checkout />
      

      <GlobalStyle />
    </ThemeProvider>
  )
}
