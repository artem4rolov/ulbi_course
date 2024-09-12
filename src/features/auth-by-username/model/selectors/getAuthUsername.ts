import { StoreSchema } from 'app'

export const getAuthUsername = (state: StoreSchema) =>
  state?.auth?.username || ''
