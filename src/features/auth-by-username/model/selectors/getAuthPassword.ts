import { StoreSchema } from 'app'

export const getAuthPassword = (state: StoreSchema) =>
  state?.auth?.password || ''
