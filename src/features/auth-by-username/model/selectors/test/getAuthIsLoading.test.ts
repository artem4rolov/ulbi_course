import { DeepPartial } from '@reduxjs/toolkit'
import { StoreSchema } from 'app'
import { getAuthIsLoading } from '../getAuthIsLoading'

describe('тест селектора для Auth Slice', () => {
  test('возврат isLoading из слайса Auth', () => {
    const state: DeepPartial<StoreSchema> = {
      auth: { isLoading: true },
    }

    expect(getAuthIsLoading(state as StoreSchema)).toEqual(true)
  })
})
