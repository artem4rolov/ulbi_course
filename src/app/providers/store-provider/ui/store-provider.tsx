import { DeepPartial } from '@reduxjs/toolkit'
import { FC } from 'react'
import { Provider } from 'react-redux'
import { StoreSchema } from '../config'
import { createReduxStore } from '../config/store'
import { useNavigate } from 'react-router-dom'

interface StoreProviderProps {
  children?: React.ReactNode
  initialState?: DeepPartial<StoreSchema>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children, initialState } = props
  const navigate = useNavigate()

  // прокидываем navigate в создание стора, чтобы можно было пользоваться навигацией в asyncThunk'ах
  const store = createReduxStore(initialState as StoreSchema, navigate)

  return <Provider store={store}>{children}</Provider>
}
