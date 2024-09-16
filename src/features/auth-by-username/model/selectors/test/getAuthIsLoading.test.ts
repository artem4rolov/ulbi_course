import { StoreSchema } from 'app'
import { getAuthIsLoading } from '../getAuthIsLoading'
import { DeepPartial } from 'shared/types'

describe('тест селектора для Auth Slice', () => {
  test('возврат isLoading из слайса Auth', () => {
    const state: DeepPartial<StoreSchema> = {
      auth: { isLoading: true },
    } as StoreSchema

    expect(getAuthIsLoading(state as StoreSchema)).toEqual(true)
  })
})
