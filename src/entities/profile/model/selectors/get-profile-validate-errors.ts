import { StoreSchema } from 'app'

export const getProfileValidateErrors = (state: StoreSchema) =>
  state?.profile?.validateError || []
