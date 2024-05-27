import { DeepPartial } from '@reduxjs/toolkit'
import { FC } from 'react'
import { Provider } from 'react-redux'
import { StoreSchema } from '../config'
import { createReduxStore } from '../config/store'

interface StoreProviderProps {
  children?: React.ReactNode
  initialState?: DeepPartial<StoreSchema>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children, initialState } = props

  const store = createReduxStore(initialState as StoreSchema)

  return <Provider store={store}>{children}</Provider>
}
