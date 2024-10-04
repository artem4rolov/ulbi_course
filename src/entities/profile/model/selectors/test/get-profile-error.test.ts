import { StoreSchema } from 'app'
import { getProfileError } from '../get-profile-error'

describe('тест селектора для Profile Slice', () => {
  test('должен вернуть ошибку которая пришла в error', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: { error: 'test error' },
    } as StoreSchema

    expect(getProfileError(state as StoreSchema)).toEqual('test error')
  })
})
