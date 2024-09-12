import { DeepPartial } from '@reduxjs/toolkit'
import { StoreSchema } from 'app'
import { getAuthUsername } from '../getAuthUsername'

describe('тест селектора для Auth Slice', () => {
  test('возврат username из слайса Auth', () => {
    const state: DeepPartial<StoreSchema> = {
      auth: { username: 'test_user' },
    }

    expect(getAuthUsername(state as StoreSchema)).toEqual('test_user')
  })
})
