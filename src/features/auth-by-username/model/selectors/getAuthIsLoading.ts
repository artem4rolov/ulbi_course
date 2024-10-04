import { StateSchema } from 'app'

export const getAuthIsLoading = (state: StateSchema) =>
  state?.auth?.isLoading || false
