import { type z } from 'zod'
import { type signInSchema } from './schemas'

export interface SignInProps {
  email: string
  password: string
}

export type SignInSchemaData = z.infer<typeof signInSchema>
