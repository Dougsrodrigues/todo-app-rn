import { NavigationContainer } from '@react-navigation/native'
import { AuthenticaticatedRoutes, AuthenticationRoutes } from '../lib'
import { useAtomValue } from 'jotai'
import { authenticationAtom } from '@/modules/authentication/atoms'

export function ReactNavigationProvider() {
  const authentication = useAtomValue(authenticationAtom)
  return (
    <NavigationContainer>
      {authentication.isAuth ? (
        <AuthenticaticatedRoutes />
      ) : (
        <AuthenticationRoutes />
      )}
    </NavigationContainer>
  )
}
