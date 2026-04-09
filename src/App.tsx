import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { AddressCard } from './components/AddressCard'
import { IconComponent } from './components/IconComponent'
import { Header } from './components/Header'
{/*import { Home } from './pages/Home'*/}

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/*<Home />*/}

      <Header />

      <AddressCard />
      <IconComponent icon='MapPin' ColorIcon='purple'/>

      <GlobalStyle />
    </ThemeProvider>
  )
}
