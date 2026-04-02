import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Button } from './components/Button'
import { Title } from './components/Title'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Title variant='title-xl' text='Título XL' />
      <br />
      <Title variant='title-l' text='Título L' />
      <br />
      <Title variant='title-m' text='Título M' />
      <br />
      <Title variant='title-s' text='Título S' />
      <br />
      <Title variant='title-xs' text='Título XS' />
      
      <Button icon='MapPin' text='Porto Alegre, RS' variant='purple'/>
      <Button icon='ShoppingCart' variant='yellow'/>

      <h1>Teste</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}
