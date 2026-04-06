import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Button } from './components/Button'
import { Title } from './components/Title'
import { Text } from './components/Text'
import { Advantages } from './components/Advantages'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className='Title'>
        <Title variant='title-xl' text='Título XL' color='base-text' />
        <br />
        <Title variant='title-l' text='Título L' color='base-subtitle' />
        <br />
        <Title variant='title-m' text='Título M' color='base-subtitle' />
        <br />
        <Title variant='title-s' text='Título S' color='base-title' />
        <br />
        <Title variant='title-xs' text='Título XS' color='base-subtitle' />
      </div>

      <div className='Text'>
        <Text variant='text-l' text='Texto L' color='base-text' />
        <br />
        <Text variant='text-l-bold' text='Texto L - BOLD' color='base-title' />
        <br />
        <Text variant='text-m' text='Texto M' color='base-text' />
        <br />
        <Text variant='text-m-bold' text='Texto M - BOLD' color='purple' />
        <br />
        <Text variant='text-s' text='Texto S' color='base-text' />
        <br />
        <Text variant='text-xs' text='Texto XS' color='base-subtitle' />
      </div>

      <div className='Button'>
        <Button icon='MapPin' text='Porto Alegre, RS' variant='purple' className='text-s' />
        <Button icon='ShoppingCart' variant='yellow' />
      </div>

      <div className="Advantages">
        <Advantages icon='ShoppingCart' text='Compra simples e segura' variant='yellow-dark'/>
        <Advantages icon='Clock' text='Entrega rápida e rastreada' variant='yellow'/>
        <Advantages icon='Box' text='Embalagem mantém o café intacto' variant='gray'/>
        <Advantages icon='Coffee' text='O café chega fresquinho até você' variant='purple'/>
      </div>

      <GlobalStyle />
    </ThemeProvider>
  )
}
