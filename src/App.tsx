import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Button } from './components/Button'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button icon='MapPin' text='Porto Alegre, RS' variant='purple'/>
      <Button icon='ShoppingCart' variant='yellow'/>

      <h1>Teste</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}
