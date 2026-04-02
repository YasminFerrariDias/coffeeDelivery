import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Button } from './components/Button'
import { Title } from './components/Title'
import { Text } from './components/Text'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className='Title'>
        <Title variant='title-xl' text='Título XL' />
        <br />
        <Title variant='title-l' text='Título L' />
        <br />
        <Title variant='title-m' text='Título M' />
        <br />
        <Title variant='title-s' text='Título S' />
        <br />
        <Title variant='title-xs' text='Título XS' />
      </div>

      <div className='Text'>
        <Text variant='text-l' text='Texto L' />
        <br />
        <Text variant='text-l-bold' text='Texto L - BOLD' />
        <br />
        <Text variant='text-m' text='Texto M' />
        <br />
        <Text variant='text-m-bold' text='Texto M - BOLD' />
        <br />
        <Text variant='text-s' text='Texto S' />
        <br />
        <Text variant='text-xs' text='Texto XS' />
      </div>

      <div className='Button'>
        <Button icon='MapPin' text='Porto Alegre, RS' variant='purple' className='text-s' />
        <Button icon='ShoppingCart' variant='yellow' />
      </div>

      <GlobalStyle />
    </ThemeProvider>
  )
}
