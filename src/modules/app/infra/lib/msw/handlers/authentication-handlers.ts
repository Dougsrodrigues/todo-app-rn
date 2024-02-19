import { rest } from 'msw'
import { faker } from '@faker-js/faker'

const authState = {
  isAuthenticated: false,
  user: '',
  token: '',
}

export const signInHandler = rest.post(
  `${process.env.EXPO_PUBLIC_API_URL}/sign-in`,
  (req, res, ctx) => {
    authState.isAuthenticated = true
    authState.user = faker.person.firstName()
    authState.token = faker.string.alphanumeric({ length: 16 })

    return res(
      ctx.status(200),

      ctx.json({
        message: 'User signed in',
        user: authState,
      }),
    )
  },
)

export const chato = rest.post(
  'http://192.168.1.9:8081/symbolicate',
  (_, res, ctx) => {
    return res(ctx.status(200))
  },
)
export const authenticationHandlers = [signInHandler, chato]
