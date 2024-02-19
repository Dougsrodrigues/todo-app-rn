import { useMutation } from 'react-query'
import { SIGN_IN_KEY, SignInProps } from '../utils'
import { authenticationService } from '../services/authentication-service'

export function useSignIn() {
  const { mutateAsync: signIn } = useMutation({
    mutationKey: SIGN_IN_KEY,
    mutationFn: (body: SignInProps) =>
      authenticationService.signIn({ ...body }),
  })

  async function handleSignIn(body: SignInProps) {
    await signIn(body)
  }

  return { handleSignIn }
}
