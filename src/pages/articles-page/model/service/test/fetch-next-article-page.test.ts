import { TestAsyncThunk } from 'shared/helpers/tests/test-async-thunk/test-async-thunk'
import { fetchNextArticlePage } from '../fetch-next-article-page'
import { fetchArticleList } from '../fetch-article-list'

jest.mock('../fetch-article-list')

describe('тест async thunk fetchNextArticlePage', () => {
  test('получение новых данных на странице при скролле элементов', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    })

    await thunk.callThunk()

    // dispatch вызвался 4 раза (1 - pending на запрос, 2 - fullfilled на запрос, 3 и 4 - смена страницы в сторе, получение новых данных)
    expect(thunk.dispatch).toHaveBeenCalledTimes(4)
    // получаем новые данные для 3 страницы
    expect(fetchArticleList).toHaveBeenCalledWith({ page: 3 })
  })

  test('не получаем новые данные, если их нет или в текущий момент происходит загрузка', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    })

    await thunk.callThunk()

    // dispatch вызвался 2 раза (1 - pending на запрос, 2 - rejected на запрос)
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    // получаем новые данные для 3 страницы
    expect(fetchArticleList).not.toHaveBeenCalled()
  })
})
