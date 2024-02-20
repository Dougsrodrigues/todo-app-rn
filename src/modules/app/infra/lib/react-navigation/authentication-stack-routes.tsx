import { SignIn } from '@/modules/authentication/screens/sign-in'
import { createStackNavigator } from '@react-navigation/stack'

export type AuthenticationRoutesParamList = {
  SignIn: undefined
}

const { Navigator, Screen } =
  createStackNavigator<AuthenticationRoutesParamList>()

export function AuthenticationRoutes() {
  return (
    <Navigator>
      <Screen
        name="SignIn"
        options={{
          headerShown: false,
        }}
        component={SignIn}
      />
    </Navigator>
  )
}
