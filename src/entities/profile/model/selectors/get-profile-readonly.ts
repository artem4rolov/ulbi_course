import { StoreSchema } from 'app'

export const getProfileReadOnly = (state: StoreSchema) =>
  state?.profile?.readonly || false
