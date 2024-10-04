import { StateSchema } from 'app'

export const getAuthData = (state: StateSchema) => state.user.authData
