import { StateSchema } from 'app'
import { getAuthUsername } from '../getAuthUsername'

describe('тест селектора для Auth Slice', () => {
  test('возврат username из слайса Auth', () => {
    const state: DeepPartial<StateSchema> = {
      auth: { username: 'test_user' },
    } as StateSchema

    expect(getAuthUsername(state as StateSchema)).toEqual('test_user')
  })
})
