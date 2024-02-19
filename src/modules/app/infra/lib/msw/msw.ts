import { setupServer } from 'msw/native'
import { authenticationHandlers } from './handlers'

export const server = setupServer(...authenticationHandlers)
