import { StateSchema } from 'app'

export const getProfileReadOnly = (state: StateSchema) =>
  state?.profile?.readonly || false
