import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StoreSchema } from './state-schema.types'
import { counterReducer } from '../../../../entities/counter/model/slice/conter-slice'
import { userReducer } from '../../../../entities/user/model/slice/user-slice'
import { createReducerManager } from './reducer-manager'

export function createReduxStore(initialState?: StoreSchema) {
  const reducers: ReducersMapObject<StoreSchema> = {
    counter: counterReducer,
    user: userReducer,
  }

  const reducerManager = createReducerManager(reducers)

  const store = configureStore<StoreSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })

  //@ts-ignore
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
