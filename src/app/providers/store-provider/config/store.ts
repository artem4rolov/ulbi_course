import { configureStore } from "@reduxjs/toolkit";
import { StoreSchema } from "./state-schema.types";
import { counterReducer } from "entities/counter";

export function createStore(initialState?: StoreSchema) {
    return configureStore<StoreSchema>({
        reducer: {
            counter: counterReducer
        },
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}
