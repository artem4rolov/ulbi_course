import { DeepPartial } from '@reduxjs/toolkit'
import { StoreSchema } from 'app'
import { getAuthError } from '../getAuthError'

describe('тест селектора для Auth Slice', () => {
  test('возврат error из слайса Auth', () => {
    const state: DeepPartial<StoreSchema> = {
      auth: { error: 'test error' },
    }

    expect(getAuthError(state as StoreSchema)).toEqual('test error')
  })
})
