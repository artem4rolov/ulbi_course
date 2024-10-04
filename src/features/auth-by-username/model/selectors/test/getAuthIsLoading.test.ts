import { StateSchema } from 'app'
import { getAuthIsLoading } from '../getAuthIsLoading'

describe('тест селектора для Auth Slice', () => {
  test('возврат isLoading из слайса Auth', () => {
    const state: DeepPartial<StateSchema> = {
      auth: { isLoading: true },
    } as StateSchema

    expect(getAuthIsLoading(state as StateSchema)).toEqual(true)
  })
})
