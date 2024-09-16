import {
  CombinedState,
  ReducersMapObject,
  configureStore,
  Reducer,
} from '@reduxjs/toolkit'
import { StoreSchema } from './state-schema.types'
import { counterReducer } from '../../../../entities/counter/model/slice/conter-slice'
import { userReducer } from '../../../../entities/user/model/slice/user-slice'
import { createReducerManager } from './reducer-manager'
import { api } from 'shared/api'
import { NavigateOptions, To } from 'react-router-dom'
import { ThunkExtraArgs } from 'app/providers/store-provider'

export function createReduxStore(
  initialState?: StoreSchema,
  navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const reducers: ReducersMapObject<StoreSchema> = {
    counter: counterReducer,
    user: userReducer,
  }

  const reducerManager = createReducerManager(reducers)

  const extraArg: ThunkExtraArgs = {
    api: api,
    navigate,
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
