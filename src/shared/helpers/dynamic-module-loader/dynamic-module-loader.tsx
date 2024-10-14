import { Reducer } from '@reduxjs/toolkit'
import {
  ReduxStoreWithManager,
  StateSchema,
  StateSchemaKey,
} from 'app/providers/store-provider/config/state-schema.types'
import { FC, PropsWithChildren, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducersList = {
  [name in StateSchemaKey]: Reducer<NonNullable<StateSchema[name]>>
}
interface IDynamicModuleLoaderProps {
  reducers: Partial<ReducersList>
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<
  PropsWithChildren<IDynamicModuleLoaderProps>
> = (props) => {
  const { children, reducers, removeAfterUnmount = true } = props

  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap()

    // при маунте асинхронного компонента, подтягиваем его редюсер
    Object.entries(reducers).forEach(([reducerKey, reducer]) => {
      const mounted = mountedReducers[reducerKey as StateSchemaKey]

      // если этот редюсер уже есть, то не монтируем его повторно
      if (!mounted) {
        store.reducerManager.add(reducerKey as StateSchemaKey, reducer)
        dispatch({ type: `add ${reducerKey} reducer` })
      }
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([reducerKey, reducer]) => {
          store.reducerManager.remove(reducerKey as StateSchemaKey)
          dispatch({ type: `remove ${reducerKey} reducer` })
        })
      }
    }
  }, [])

  return <>{children}</>
}
