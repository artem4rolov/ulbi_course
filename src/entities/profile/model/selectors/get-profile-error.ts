import { StoreSchema } from 'app'

export const getProfileError = (state: StoreSchema) =>
  state?.profile?.error || ''
