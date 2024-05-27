import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StoreSchema } from './state-schema.types'
import { counterReducer } from '../../../../entities/counter/model/slice/conter-slice'
import { userReducer } from '../../../../entities/user/model/slice/user-slice'

export function createReduxStore(initialState?: StoreSchema) {
  const reducers: ReducersMapObject<StoreSchema> = {
    counter: counterReducer,
    user: userReducer,
  }
  return configureStore<StoreSchema>({
    reducer: reducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })
}
