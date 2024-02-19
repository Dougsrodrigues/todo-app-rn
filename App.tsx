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

async function enableMocking() {
  if (!__DEV__) {
    return
  }

  await import('./msw.polyfills')
  const { server } = await import('./src/modules/app/infra/lib/msw/msw')
  server.listen()
}

export default function App() {
  const [loadingFonts] = useFonts({
    Archivo_700Bold,
    Archivo_400Regular,
    Archivo_200ExtraLight,
    Archivo_300Light,
    Archivo_500Medium,
  })
  enableMocking()

  if (!loadingFonts) return <Text>loading</Text>

  return <Bootstrap />
}
