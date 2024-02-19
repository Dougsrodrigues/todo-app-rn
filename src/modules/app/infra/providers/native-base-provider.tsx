import { NativeBaseProvider } from 'native-base'
import { theme } from '../../styles/global-theme'

interface ReactNativeBaseProviderProps {
  children: React.ReactNode
}

export function ReactNativeBaseProvider({
  children,
}: ReactNativeBaseProviderProps) {
  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
}
