import { Dimensions } from 'react-native'
import { RFValue as RFValueRN } from 'react-native-responsive-fontsize'

const height = Dimensions.get('screen').height
export function RFValue(value: number) {
  return RFValueRN(value, height)
}
