import { StateSchema } from 'app'
import { getProfileError } from '../get-profile-error'

describe('тест селектора для Profile Slice', () => {
  test('должен вернуть ошибку которая пришла в error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { error: 'test error' },
    } as StateSchema

    expect(getProfileError(state as StateSchema)).toEqual('test error')
  })
})
