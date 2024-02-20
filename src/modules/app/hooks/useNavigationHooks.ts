import {
  NavigationProp,
  useNavigation as useNavigationRN,
} from '@react-navigation/native'
import {
  AuthenticaticatedRoutesParamList,
  AuthenticationRoutesParamList,
} from '../infra'

export const useNavigation = () => {
  const navigation = useNavigationRN<
    NavigationProp<AuthenticaticatedRoutesParamList> &
      NavigationProp<AuthenticationRoutesParamList>
  >()

  return navigation
}
