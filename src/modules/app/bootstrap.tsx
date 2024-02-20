import {
  ReactQueryProvider,
  ReactNativeBaseProvider,
  ReactNavigationProvider,
} from './infra'

export function Bootstrap() {
  return (
    <>
      <ReactNativeBaseProvider>
        <ReactQueryProvider>
          <ReactNavigationProvider />
        </ReactQueryProvider>
      </ReactNativeBaseProvider>
    </>
  )
}
