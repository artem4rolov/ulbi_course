import { StoreSchema } from 'app'

export const getProfileFirstName = (state: StoreSchema) =>
  state?.profile?.data?.firstname || ''
