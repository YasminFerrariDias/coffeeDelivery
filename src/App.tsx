import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { ButtonCart } from './components/ButtonCart'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ButtonCart />

      <h1>Teste</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}
