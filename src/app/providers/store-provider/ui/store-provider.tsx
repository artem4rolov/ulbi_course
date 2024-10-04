import { FC } from 'react'
import { Provider } from 'react-redux'
import { StoreSchema } from '../config'
import { createReduxStore } from '../config/store'
import { useNavigate } from 'react-router-dom'
import { ReducersMapObject } from '@reduxjs/toolkit'

interface StoreProviderProps {
  children?: React.ReactNode
  initialState?: DeepPartial<StoreSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StoreSchema>>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children, initialState, asyncReducers } = props
  // const navigate = useNavigate()

  const store = createReduxStore(
    initialState as StoreSchema,
    asyncReducers as ReducersMapObject<StoreSchema>,
    // прокидываем navigate в создание стора, чтобы можно было пользоваться навигацией в asyncThunk'ах
    // navigate,
  )

  console.log('RENDER')

  return <Provider store={store}>{children}</Provider>
}
