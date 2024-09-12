import { StoreSchema } from 'app'

export const getAuthError = (state: StoreSchema) => state?.auth?.error || ''
