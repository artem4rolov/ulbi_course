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
import { UISaveScrollSchema } from 'features/ui-save-scroll'
import { ArticleDetailsPageSchema } from 'pages/article-details-page/model/types'
import { ArticlesPageSchema } from 'pages/articles-page'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  uiScroll: UISaveScrollSchema

  // Асинхронные редюсеры
  auth?: AuthSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlesPageSchema
  articleDetailsPage?: ArticleDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema

export type MountedReucers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
  // true - редюсер уже вмонтирован, false - еще не вмонтирован
  // getMountedReducers: () => MountedReucers
}

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
  // navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
