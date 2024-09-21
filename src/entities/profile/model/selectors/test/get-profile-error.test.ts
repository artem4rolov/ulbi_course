import { StoreSchema } from 'app'
import { DeepPartial } from 'shared/types'
import { getProfileData } from '../get-profile-data'
import { getProfileError } from '../get-profile-error'

describe('тест селектора для Profile Slice', () => {
  test('должен вернуть ошибку которая пришла в error', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: { error: 'test error' },
    } as StoreSchema

    expect(getProfileError(state as StoreSchema)).toEqual('test error')
  })
})
