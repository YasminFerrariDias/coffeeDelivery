import { GlobalStyle } from './styles/global';
import 'styled-components'
import { defaultTheme } from '../src/styles/themes/default'

type ThemeType = typeof defaultTheme
type GlobalType = typeof GlobalStyle

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeType {}

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface GlobalStyle extends ThemeType {}
}