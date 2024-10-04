import {
  AnyAction,
  CombinedState,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { AxiosInstance } from 'axios'
import { ArticleDetailsSchema } from 'entities/article'
import { CounterSchema } from 'entities/counter'
import { ProfileSchema } from 'entities/profile'
import { UserSchema } from 'entities/user'
import { AddCommentFormSchema } from 'features/add-comment-form'
import { AuthSchema } from 'features/auth-by-username'
import { ArticleDetailsCommentSchema } from 'pages/article-details-page'
import { ArticlesPageSchema } from 'pages/articles-page'
import { NavigateOptions, To } from 'react-router-dom'

export interface StoreSchema {
  counter: CounterSchema
  user: UserSchema

  // Асинхронные редюсеры
  auth?: AuthSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articleDetailsComments?: ArticleDetailsCommentSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlesPageSchema
}

export type StateSchemaKey = keyof StoreSchema

export type MountedReucers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StoreSchema>
  reduce: (state: StoreSchema, action: AnyAction) => CombinedState<StoreSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
  // true - редюсер уже вмонтирован, false - еще не вмонтирован
  // getMountedReducers: () => MountedReucers
}

export interface ReduxStoreWithManager extends ToolkitStore<StoreSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
  // navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StoreSchema
}
