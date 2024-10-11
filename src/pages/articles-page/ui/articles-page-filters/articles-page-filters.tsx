import {
  ArticleSortField,
  ArticleSortSelector,
  ArticleType,
  ArticleTypeTabs,
  ArticleView,
  ArticleViewSelector,
} from 'entities/article'
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from '../../model/selectors/articles-page.selectors'
import { articlePageActions } from '../../model/slice/article-page.slice'
import { useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import {
  CardComponent,
  classNames,
  Input,
  Select,
  useAppDispatch,
} from 'shared'

import classes from './articles-page-filters.module.scss'
import { SortOrder } from 'shared/types'
import { fetchArticleList } from 'pages/articles-page/model/service/fetch-article-list'
import { useDebounce } from 'shared/hooks/use-debounce'
import { TabItem, TabsList } from 'shared/ui/tabs-list/tabs-list'

interface ArticlesPageFiltersProps {
  className?: string
}

const ArticlesPageFilters = ({ className }: ArticlesPageFiltersProps) => {
  const dispatch = useAppDispatch()
  const view = useSelector(getArticlesPageView)
  const order = useSelector(getArticlesPageOrder)
  const sort = useSelector(getArticlesPageSort)
  const search = useSelector(getArticlesPageSearch)
  const tabType = useSelector(getArticlesPageType)

  const fetchData = useCallback(() => {
    dispatch(fetchArticleList({ replace: true }))
  }, [dispatch])

  const debouncedFetchData = useDebounce(fetchData, 500)

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlePageActions.setView(view))
      dispatch(articlePageActions.setPage(1))
      debouncedFetchData()
    },
    [dispatch, debouncedFetchData],
  )
  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlePageActions.setSort(newSort))
      dispatch(articlePageActions.setPage(1))
      debouncedFetchData()
    },
    [dispatch, debouncedFetchData],
  )
  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      console.log(newOrder)
      dispatch(articlePageActions.setOrder(newOrder))
      dispatch(articlePageActions.setPage(1))
      debouncedFetchData()
    },
    [dispatch, debouncedFetchData],
  )
  const onChangeSearch = useCallback(
    (newSearch: string) => {
      dispatch(articlePageActions.setSearch(newSearch))
      dispatch(articlePageActions.setPage(1))
      debouncedFetchData()
    },
    [dispatch, debouncedFetchData],
  )
  const onChangeTab = useCallback(
    (newType: string) => {
      dispatch(articlePageActions.setType(newType as ArticleType))
      dispatch(articlePageActions.setPage(1))
      // debouncedFetchData()
      // при изменении типа статьи, debounce не требуется
      fetchData()
    },
    [dispatch, fetchData],
  )

  return (
    <div
      className={classNames(classes['articles-page-filters'], {}, [className])}
    >
      <div className={classes['articles-page-filters-sort-wrapper']}>
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <CardComponent className={classes['articles-page-filters-search']}>
        <Input placeholder="Поиск" onChange={onChangeSearch} value={search} />
      </CardComponent>
      <ArticleTypeTabs onChangeTab={onChangeTab} value={tabType} />
    </div>
  )
}

export default ArticlesPageFilters
