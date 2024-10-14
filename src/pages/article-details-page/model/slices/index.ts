import { combineReducers } from '@reduxjs/toolkit'
import { ArticleDetailsPageSchema } from '../types'
import { articleDetailsCommentsReducer } from './article-details-comments-slice'
import { articleDetailsRecomendationsReducer } from './article-details-page-recomendations-slice'

// группировка редюсеров
export const articleDetailsPageReducer =
  combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recomendations: articleDetailsRecomendationsReducer,
  })
