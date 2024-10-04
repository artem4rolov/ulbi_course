import { FC } from 'react'
import { Provider } from 'react-redux'
import { StateSchema } from '../config'
import { createReduxStore } from '../config/store'
import { useNavigate } from 'react-router-dom'
import { ReducersMapObject } from '@reduxjs/toolkit'

interface StoreProviderProps {
  children?: React.ReactNode
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children, initialState, asyncReducers } = props
  // const navigate = useNavigate()

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
    // прокидываем navigate в создание стора, чтобы можно было пользоваться навигацией в asyncThunk'ах
    // navigate,
  )

  console.log('RENDER')

  return <Provider store={store}>{children}</Provider>
}
