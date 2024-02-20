import { z } from 'zod'

export const signInSchema = z.object({
  email: z.string().email('Invalid e-mail.'),
  password: z
    .string()
    .min(5, 'The password must be at least 5 characters long.'),
})
