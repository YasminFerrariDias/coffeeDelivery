import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
{/*import { Button } from './components/Button'
import { Title } from './components/Title'
import { Text } from './components/Text'
import { Advantages } from './components/Advantages'
import { Tag } from './components/Tag'
import { Count } from './components/Count'
import { Card } from './components/Card'
import { Price } from './components/Price'*/}
import { CoffeeCard } from './components/CoffeeCard'


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/*<div className='Title'>
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
        <Button icon='MapPin' text='Porto Alegre, RS' color='purple-dark' ColorVariant='purple-light' ColorIcon='purple' variant='text-s' />
        <Button icon='ShoppingCart' ColorVariant='yellow-light' ColorIcon='yellow-dark' color='yellow-dark' variant='text-s' text=''/>
      </div>

      <div className="Advantages">
        <Advantages icon='ShoppingCart' text='Compra simples e segura' variant={'text-m'} color={'base-text'} IconColor='yellow-dark'/>
        <Advantages icon='Clock' text='Entrega rápida e rastreada' variant={'text-m'} color={'base-text'} IconColor='yellow' />
        <Advantages icon='Box' text='Embalagem mantém o café intacto' variant={'text-m'} color={'base-text'} IconColor='base-text' />
        <Advantages icon='Coffee' text='O café chega fresquinho até você' variant={'text-m'} color={'base-text'} IconColor='purple-dark' />
      </div>

      <div className="Tag">
        <Tag text='TRADICIONAL' color='yellow-dark' variant='tag' BackgroundColor='yellow-light'/>
      </div>

      <div className="Count">
        <Count />
      </div>

      <div className="Price">
        <Price price='9,90' />
      </div>

      <div className='Card'>
        <Card variant='smallRounded'/>
        <Card variant='mediumArounded'/>
        <Card variant='smallSquare'/>
        <Card variant='mediumSquare'/>
      </div>*/}

      <div className="CoffeeCard">
        <CoffeeCard img='Expresso' text='Café com Leite' $colorBackground='yellow-light' color='yellow' tagValue={['ESPECIAL', 'ALCOÓLICO', 'GELADO']} variant='tag' />
      </div>

      <GlobalStyle />
    </ThemeProvider>
  )
}
