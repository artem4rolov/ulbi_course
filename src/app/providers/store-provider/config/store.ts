import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StoreSchema } from "./state-schema.types";
import { counterReducer } from "entities/counter";
import { userReducer } from "entities";

export function createStore(initialState?: StoreSchema) {
    const reducers: ReducersMapObject<StoreSchema> = {
        counter: counterReducer,
        user: userReducer
    }
    return configureStore<StoreSchema>({
        reducer: reducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}
