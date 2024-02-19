import { extendTheme } from 'native-base'
import { colors } from './colors'
import { fonts, fontConfig } from './fonts'
import { fontSizes } from './font-sizes'

export const theme = extendTheme({ colors, fonts, fontConfig, fontSizes })
