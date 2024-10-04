import { StateSchema } from 'app'

export const getAuthPassword = (state: StateSchema) =>
  state?.auth?.password || ''
