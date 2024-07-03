import { StoreSchema } from 'app'

export const getAuthData = (state: StoreSchema) => state.user.authData
