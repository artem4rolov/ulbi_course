import { DeepPartial } from '@reduxjs/toolkit'
import { StoreSchema } from 'app'
import { getAuthPassword } from '../getAuthPassword'

describe('тест селектора для Auth Slice', () => {
  test('возврат password из слайса Auth', () => {
    const state: DeepPartial<StoreSchema> = {
      auth: { password: '1234' },
    }

    expect(getAuthPassword(state as StoreSchema)).toEqual('1234')
  })
})
