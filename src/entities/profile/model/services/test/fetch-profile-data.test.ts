import { userActions } from 'entities/user'
import { TestAsyncThunk } from 'shared/helpers/tests/test-async-thunk/test-async-thunk'
import { fetchProfileData } from '../fetch-profile-data'
import { waitFor } from '@testing-library/react'

describe('тест async thunk fetchProfileData', () => {
  const data = {
    firstname: 'Артем',
    lastname: 'Фролов',
    age: 28,
    currency: 'EUR',
    country: 'Russia',
    city: 'Volgograd123',
    username: 'admin',
    avatar:
      'https://img.freepik.com/premium-vector/funny-cartoon-moose_6996-1314.jpg',
  }

  test('получение данных профиля', async () => {
    // мокаем успешный запрос
    // mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))

    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ data: data }))
    const result = await thunk.callThunk()

    // ожидаем вызова запроса
    expect(thunk.api.get).toHaveBeenCalled()
    waitFor(() => {
      // ожидаем выполнения промиса
      expect(result.meta.requestStatus).toBe('fulfilled')
      // проверяем полученные данные
      expect(result.payload).toEqual(data)
    })
  })

  test('ошибка получения данных профиля от сервера', async () => {
    // мокаем ошибочный запрос
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()

    // ожидаем выполнения промиса со статусом rejected
    waitFor(() => {
      expect(result.meta.requestStatus).toBe('rejected')
    })
  })
})
