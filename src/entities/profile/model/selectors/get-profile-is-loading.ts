import { StoreSchema } from 'app'

export const getProfileIsLoading = (state: StoreSchema) =>
  state?.profile?.isLoading
