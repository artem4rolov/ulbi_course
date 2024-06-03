import { DeepPartial } from '@reduxjs/toolkit'
import { StoreSchema } from 'app'
import { counterActions, counterReducer } from './conter-slice'
import { CounterSchema } from '../types/conter-slice.types'

describe('Тест редюсеров слайса Counter', () => {
  test('тест декремента', () => {
    const state: CounterSchema = { value: 10 }

    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    })
  })

  test('тест инкремента', () => {
    const state: CounterSchema = { value: 10 }

    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    })
  })

  test('тест инкремента с пустым стором (но есть дефолтный)', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    })
  })
})
