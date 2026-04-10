import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { PaymentCard } from './components/PaymentCard'

{/*import { Home } from './pages/Home'*/ }

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/*<Home />*/}

      <PaymentCard />
      
      <GlobalStyle />
    </ThemeProvider>
  )
}
