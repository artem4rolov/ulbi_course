import {
  CombinedState,
  ReducersMapObject,
  configureStore,
  Reducer,
} from '@reduxjs/toolkit'
import { StoreSchema } from './state-schema.types'
import { counterReducer } from 'entities/counter'
import { userReducer } from 'entities/user'
import { createReducerManager } from './reducer-manager'
import { api } from 'shared/api'
import { NavigateOptions, To } from 'react-router-dom'
import { ThunkExtraArg } from './state-schema.types'

export function createReduxStore(
  initialState?: StoreSchema,
  asyncReducers?: ReducersMapObject<StoreSchema>,
  // navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const reducers: ReducersMapObject<StoreSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  }

  const reducerManager = createReducerManager(reducers)

  const extraArg: ThunkExtraArg = {
    api: api,
    // navigate,
  }

  // const store = configureStore<StoreSchema>({
  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StoreSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
  })

  //@ts-ignore
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
