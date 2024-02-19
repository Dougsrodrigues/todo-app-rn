import 'native-base'
import { theme } from '../modules/app/styles/global-theme'

type CustomThemeType = typeof theme

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
