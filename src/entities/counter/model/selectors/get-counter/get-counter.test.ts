import { DeepPartial } from "@reduxjs/toolkit"
import { StoreSchema } from "app"
import { getCounter } from "./get-counter"

describe('тест селектора для Counter', () => {
    test('возврат стейта из слайса Counter', () => {
        const state: DeepPartial<StoreSchema> = {
            counter: { value: 10 }
        }

        expect(getCounter(state as StoreSchema)).toEqual({value: 10})
    }) 
})