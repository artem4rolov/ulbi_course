import {
  AnyAction,
  CombinedState,
  Dispatch,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { AxiosInstance } from 'axios'
import { CounterSchema } from 'entities/counter'
import { ProfileSchema } from 'entities/profile'
import { UserSchema } from 'entities/user'
import { AuthSchema } from 'features/auth-by-username'
import { NavigateOptions, To } from 'react-router-dom'

export interface StoreSchema {
  counter: CounterSchema
  user: UserSchema

  // Асинхронные редюсеры
  auth?: AuthSchema
  profile?: ProfileSchema
}

export type StateSchemaKey = keyof StoreSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StoreSchema>
  reduce: (state: StoreSchema, action: AnyAction) => CombinedState<StoreSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends ToolkitStore<StoreSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArgs {
  api: AxiosInstance
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArgs
}
