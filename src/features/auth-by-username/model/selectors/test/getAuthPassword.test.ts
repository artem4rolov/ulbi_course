import { StateSchema } from 'app'
import { getAuthPassword } from '../getAuthPassword'

describe('тест селектора для Auth Slice', () => {
  test('возврат password из слайса Auth', () => {
    const state: DeepPartial<StateSchema> = {
      auth: { password: '1234' },
    } as StateSchema

    expect(getAuthPassword(state as StateSchema)).toEqual('1234')
  })
})
