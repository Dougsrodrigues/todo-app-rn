import { TodoList } from '@/modules/to-do/screens'
import { createStackNavigator } from '@react-navigation/stack'

export type AuthenticaticatedRoutesParamList = {
  TodoList: undefined
}

const { Navigator, Screen } =
  createStackNavigator<AuthenticaticatedRoutesParamList>()

export function AuthenticaticatedRoutes() {
  return (
    <Navigator>
      <Screen
        name="TodoList"
        options={{
          headerShown: false,
        }}
        component={TodoList}
      />
    </Navigator>
  )
}
