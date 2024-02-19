import { api } from '../../app/infra'
import { SignInProps } from '../utils'

async function signIn({ ...body }: SignInProps) {
  const { data } = await api.post('/sign-in', body)
  return data
}

export const authenticationService = {
  signIn,
}
