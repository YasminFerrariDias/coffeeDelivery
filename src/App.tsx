import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { InputText } from './components/InputText'
{/*import { Home } from './pages/Home'*/}

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/*<Home />*/}

      <InputText placeholder='UF' $variableSize='mini' />
      <InputText placeholder='Cidade' $variableSize='small' />
      <InputText placeholder='Cidade' $variableSize='medium' />
      <InputText placeholder='Cidade' $variableSize='large' />
      <InputText placeholder='Cidade' $variableSize='extraLarge' />

      <GlobalStyle />
    </ThemeProvider>
  )
}
