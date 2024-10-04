import { StateSchema } from 'app'
import { getCounter } from './get-counter'

describe('тест селектора для Counter', () => {
  test('возврат стейта из слайса Counter', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    }

    expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
  })
})
