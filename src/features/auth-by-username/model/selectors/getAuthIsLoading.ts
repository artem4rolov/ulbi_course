import { StoreSchema } from 'app'

export const getAuthIsLoading = (state: StoreSchema) =>
  state?.auth?.isLoading || false
