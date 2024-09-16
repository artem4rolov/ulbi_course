import { StoreSchema } from 'app'
import { getAuthUsername } from '../getAuthUsername'
import { DeepPartial } from 'shared/types'

describe('тест селектора для Auth Slice', () => {
  test('возврат username из слайса Auth', () => {
    const state: DeepPartial<StoreSchema> = {
      auth: { username: 'test_user' },
    } as StoreSchema

    expect(getAuthUsername(state as StoreSchema)).toEqual('test_user')
  })
})
