import { rest } from 'msw'
import { faker } from '@faker-js/faker'

export const authState = {
  isAuthenticated: false,
  user: '',
  token: '',
}

export const signInHandler = rest.post(
  `${process.env.EXPO_PUBLIC_API_URL}/sign-in`,
  async (req, res, ctx) => {
    const { email, password } = await req.json()

    if (!email || !password) {
      return res(
        ctx.delay(1000),
        ctx.status(403),
        ctx.json({
          message: 'User signed in',
          user: null,
        }),
      )
    }

    authState.isAuthenticated = true
    authState.user = faker.person.firstName()
    authState.token = faker.string.alphanumeric({ length: 16 })

    return res(
      ctx.delay(1000),
      ctx.status(200),

      ctx.json({
        message: 'User signed in',
        user: authState,
      }),
    )
  },
)

export const authenticationHandlers = [
  signInHandler,
  rest.post('http://192.168.1.9:8081/symbolicate', (_, res, ctx) => {
    return res(ctx.status(200))
  }),
]
