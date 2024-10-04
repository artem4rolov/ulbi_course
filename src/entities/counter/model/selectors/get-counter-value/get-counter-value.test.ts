import { StateSchema } from 'app'
import { getCounterValue } from './get-counter-value'

describe('тест селектора для Counter', () => {
  test('возврат значения из слайса Counter', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    }

    expect(getCounterValue(state as StateSchema)).toEqual(10)
  })
})
