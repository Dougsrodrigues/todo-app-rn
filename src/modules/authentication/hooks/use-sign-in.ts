import { useMutation } from 'react-query'
import { SIGN_IN_KEY, SignInProps } from '../utils'
import { authenticationService } from '../services/authentication-service'
import { api } from '../../app/infra'
import { useState } from 'react'

export function useSignIn() {
  const [showPassword, setShowPassword] = useState(false)

  const { mutateAsync: signIn, isLoading } = useMutation({
    mutationKey: SIGN_IN_KEY,
    mutationFn: (body: SignInProps) =>
      authenticationService.signIn({ ...body }),
    onSuccess: (data) => {
      console.log({ data })
      api.defaults.headers.Authorization = `Bearer ${data.token}`
    },
  })

  async function handleSignIn(body: SignInProps) {
    console.log({ body })
    await signIn(body)
  }

  function handleShowPassword() {
    setShowPassword(!showPassword)
  }

  return { handleSignIn, isLoading, showPassword, handleShowPassword }
}
