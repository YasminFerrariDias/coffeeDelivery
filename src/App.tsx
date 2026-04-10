import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Checkout } from './pages/Checkout'

{/*import { Home } from './pages/Home'*/ }

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/*<Home />*/}

      <Checkout />
      
      <GlobalStyle />
    </ThemeProvider>
  )
}
