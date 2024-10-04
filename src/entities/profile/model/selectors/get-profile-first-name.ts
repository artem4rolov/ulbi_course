import { StateSchema } from 'app'

export const getProfileFirstName = (state: StateSchema) =>
  state?.profile?.data?.firstname || ''
