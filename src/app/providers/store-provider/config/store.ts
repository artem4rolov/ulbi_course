import {
  CombinedState,
  ReducersMapObject,
  configureStore,
  Reducer,
} from '@reduxjs/toolkit'
import { StateSchema } from './state-schema.types'
import { counterReducer } from 'entities/counter'
import { userReducer } from 'entities/user'
import { createReducerManager } from './reducer-manager'
import { api } from 'shared/api'
import { NavigateOptions, To } from 'react-router-dom'
import { ThunkExtraArg } from './state-schema.types'
import { uiSaveScrollReducer } from 'features/ui-save-scroll'

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  // navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const reducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    uiScroll: uiSaveScrollReducer,
  }

  const reducerManager = createReducerManager(reducers)

  const extraArg: ThunkExtraArg = {
    api: api,
    // navigate,
  }

  // const store = configureStore<StateSchema>({
  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
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
