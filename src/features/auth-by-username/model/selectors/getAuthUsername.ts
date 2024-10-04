import { StateSchema } from 'app'

export const getAuthUsername = (state: StateSchema) =>
  state?.auth?.username || ''
