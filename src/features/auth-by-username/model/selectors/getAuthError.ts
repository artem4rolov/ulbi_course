import { StateSchema } from 'app'

export const getAuthError = (state: StateSchema) => state?.auth?.error || ''
