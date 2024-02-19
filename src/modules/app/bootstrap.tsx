import { SignIn } from '../authentication/screens/sign-in'
import { ReactNativeBaseProvider } from './infra/providers/native-base-provider'

export function Bootstrap() {
  return (
    <>
      <ReactNativeBaseProvider>
        <SignIn />
      </ReactNativeBaseProvider>
    </>
  )
}
