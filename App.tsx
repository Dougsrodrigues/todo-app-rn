import { Text } from 'react-native'
import {
  useFonts,
  Archivo_700Bold,
  Archivo_400Regular,
  Archivo_200ExtraLight,
  Archivo_300Light,
  Archivo_500Medium,
} from '@expo-google-fonts/archivo'

import { Bootstrap } from './src/modules/app/bootstrap'

export default function App() {
  const [loadingFonts] = useFonts({
    Archivo_700Bold,
    Archivo_400Regular,
    Archivo_200ExtraLight,
    Archivo_300Light,
    Archivo_500Medium,
  })

  if (!loadingFonts) return <Text>loading</Text>
  return <Bootstrap />
}
