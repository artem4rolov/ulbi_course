import { createSelector } from '@reduxjs/toolkit'
import { getArticleDetailsData } from 'entities/article'
import { getAuthData } from 'entities/user'

export const canUserEditArticle = createSelector(
  getArticleDetailsData,
  getAuthData,
  (article, user) => {
    if (!article || !user) {
      return false
    }

    return article.user.id === user.id
  },
)
