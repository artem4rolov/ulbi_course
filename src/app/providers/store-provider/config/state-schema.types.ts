import {
  AnyAction,
  CombinedState,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { CounterSchema } from 'entities/counter'
import { UserSchema } from 'entities/user'
import { AuthSchema } from 'features/auth-by-username'

export interface StoreSchema {
  counter: CounterSchema
  user: UserSchema

  // Асинхронные редюсеры
  auth?: AuthSchema
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
