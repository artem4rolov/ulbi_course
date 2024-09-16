import { StoreSchema } from 'app'
import { getAuthPassword } from '../getAuthPassword'
import { DeepPartial } from 'shared/types'

describe('тест селектора для Auth Slice', () => {
  test('возврат password из слайса Auth', () => {
    const state: DeepPartial<StoreSchema> = {
      auth: { password: '1234' },
    } as StoreSchema

    expect(getAuthPassword(state as StoreSchema)).toEqual('1234')
  })
})
