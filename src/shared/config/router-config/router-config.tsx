import {
  MainPage,
  AboutPageAsync as AboutPage,
  ProfilePageAsync as ProfilePage,
} from 'pages'
import { NotFoundPage } from 'pages/not-found-page'
import { ArticlesPage } from 'pages/articles-page'
import { ArticleDetailsPage } from 'pages/article-details-page'
import { type RouteProps } from 'react-router'
import ArticleEditPage from 'pages/article-edit-page/ui/article-edit-page'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}

export enum RouterNames {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
}

export const RouterPaths: Record<RouterNames, string> = {
  [RouterNames.MAIN]: '/',
  [RouterNames.ABOUT]: '/about',
  [RouterNames.PROFILE]: '/profile/', // + id для просмотра пользователя
  [RouterNames.NOT_FOUND]: '*',
  [RouterNames.ARTICLES]: '/articles',
  [RouterNames.ARTICLE_DETAILS]: '/articles/', // + id для отдельной статьи
  [RouterNames.ARTICLE_CREATE]: '/articles/create',
  [RouterNames.ARTICLE_EDIT]: '/articles/:id/edit', // + id статьи, которую будем редактировать
}

export const routerConfig: Record<RouterNames, AppRoutesProps> = {
  [RouterNames.MAIN]: {
    path: RouterPaths.main,
    element: <MainPage />,
  },
  [RouterNames.ABOUT]: {
    path: RouterPaths.about,
    element: <AboutPage />,
  },
  [RouterNames.PROFILE]: {
    path: `${RouterPaths.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [RouterNames.ARTICLES]: {
    path: RouterPaths.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [RouterNames.ARTICLE_DETAILS]: {
    path: `${RouterPaths.article_details}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [RouterNames.ARTICLE_EDIT]: {
    path: `${RouterPaths.article_edit}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [RouterNames.ARTICLE_CREATE]: {
    path: `${RouterPaths.article_create}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  // not-found
  [RouterNames.NOT_FOUND]: {
    path: RouterPaths.not_found,
    element: <NotFoundPage />,
  },
}
