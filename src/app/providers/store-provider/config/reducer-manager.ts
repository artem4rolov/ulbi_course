import {
  AnyAction,
  combineReducers,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit'
import {
  MountedReucers,
  ReducerManager,
  StateSchemaKey,
  StoreSchema,
} from './state-schema.types'

export function createReducerManager(
  initialReducers: ReducersMapObject<StoreSchema>,
): ReducerManager {
  const reducers = { ...initialReducers }

  let combinedReducer = combineReducers(reducers)

  let keysToRemove: StateSchemaKey[] = []
  const mountedReducers: MountedReucers = {}

  return {
    getReducerMap: () => reducers,
    // getMountedReducers: () => mounted
    reduce: (state: StoreSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state }
        for (const key of keysToRemove) {
          delete state[key]
        }
        keysToRemove = []
      }

      return combinedReducer(state, action)
    },

    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }

      reducers[key] = reducer
      mountedReducers[key] = true

      combinedReducer = combineReducers(reducers)
    },

    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return
      }

      delete reducers[key]
      keysToRemove.push(key)
      mountedReducers[key] = false

      combinedReducer = combineReducers(reducers)
    },
  }
}
