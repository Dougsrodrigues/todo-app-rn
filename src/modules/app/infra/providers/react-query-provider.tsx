import { QueryClientProvider } from 'react-query'
import { queryClient } from '../lib'

interface ReactQueryProvider {
  children: React.ReactNode
}

export function ReactQueryProvider({ children }: ReactQueryProvider) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
