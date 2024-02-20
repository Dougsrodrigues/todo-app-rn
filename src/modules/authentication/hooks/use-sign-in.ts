import { useMutation } from 'react-query'
import { SIGN_IN_KEY, SignInProps } from '../utils'
import { authenticationService } from '../services/authentication-service'
import { api } from '../../app/infra'
import { useState } from 'react'
import { useNavigation } from '@/modules/app/hooks'
import { useAtom } from 'jotai'
import { authenticationAtom } from '../atoms'

export function useSignIn() {
  const [, setAuthentication] = useAtom(authenticationAtom)
  const [showPassword, setShowPassword] = useState(false)

  const navigation = useNavigation()
  const { mutateAsync: signIn, isLoading } = useMutation({
    mutationKey: SIGN_IN_KEY,
    mutationFn: (body: SignInProps) =>
      authenticationService.signIn({ ...body }),
    onSuccess: (data) => {
      api.defaults.headers.Authorization = `Bearer ${data.token}`

      setAuthentication({
        isAuth: true,
        name: data.user,
      })

      navigation.navigate('TodoList')
    },
  })

  async function handleSignIn(body: SignInProps) {
    await signIn(body)
  }

  function handleShowPassword() {
    setShowPassword(!showPassword)
  }

  return { handleSignIn, isLoading, showPassword, handleShowPassword }
}
