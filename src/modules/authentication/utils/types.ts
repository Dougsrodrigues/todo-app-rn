import { type z } from 'zod'
import { type signInSchema } from './schemas'
import { authState } from '../../app/infra'

export interface SignInProps {
  email: string
  password: string
}

export type SignInResponse = typeof authState

export type SignInSchemaData = z.infer<typeof signInSchema>
