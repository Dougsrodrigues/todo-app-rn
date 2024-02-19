import { SignIn } from '../authentication/screens/sign-in'
import { ReactQueryProvider, ReactNativeBaseProvider } from './infra'

export function Bootstrap() {
  return (
    <>
      <ReactNativeBaseProvider>
        <ReactQueryProvider>
          <SignIn />
        </ReactQueryProvider>
      </ReactNativeBaseProvider>
    </>
  )
}
