import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app'
import { getAuthError } from '../getAuthError'

describe('тест селектора для Auth Slice', () => {
  test('возврат error из слайса Auth', () => {
    const state: DeepPartial<StateSchema> = {
      auth: { error: 'test error' },
    } as StateSchema

    expect(getAuthError(state as StateSchema)).toEqual('test error')
  })
})
