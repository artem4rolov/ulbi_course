import { StoreSchema } from 'app'
import { getCounterValue } from './get-counter-value'

describe('тест селектора для Counter', () => {
  test('возврат значения из слайса Counter', () => {
    const state: DeepPartial<StoreSchema> = {
      counter: { value: 10 },
    }

    expect(getCounterValue(state as StoreSchema)).toEqual(10)
  })
})
