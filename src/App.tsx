import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { AddressCard } from './components/AddressCard'
{/*import { Home } from './pages/Home'*/ }

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/*<Home />*/}

      <AddressCard />

      <GlobalStyle />
    </ThemeProvider>
  )
}
