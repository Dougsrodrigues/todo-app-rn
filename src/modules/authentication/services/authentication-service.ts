import { api } from '../../app/infra'
import { SignInProps, SignInResponse } from '../utils'

async function signIn({ ...body }: SignInProps): Promise<SignInResponse> {
  const { data } = await api.post('/sign-in', body)
  return data
}

export const authenticationService = {
  signIn,
}
