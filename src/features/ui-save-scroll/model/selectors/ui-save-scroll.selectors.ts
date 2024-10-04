import { createSelector } from '@reduxjs/toolkit'
import { StateSchema } from 'app'

export const getUIScroll = (state: StateSchema) => state.uiScroll.scroll
export const getUIScrollByPath = createSelector(
  getUIScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
)
