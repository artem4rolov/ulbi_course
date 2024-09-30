import { TestAsyncThunk } from 'shared/helpers/tests/test-async-thunk/test-async-thunk'
import { waitFor } from '@testing-library/react'
import { updateProfileData } from '../update-profile-data'
import { Currency } from 'entities/currency'
import { Country } from 'entities/country'
import { ValidateProfileError } from '../../type/profile'

describe('тест async thunk updateProfileData', () => {
  const data = {
    id: '1',
    firstname: 'Артем',
    lastname: 'Фролов',
    age: 28,
    currency: Currency.RUB,
    country: Country.Armenia,
    city: 'Volgograd123',
    username: 'admin',
    avatar:
      'https://img.freepik.com/premium-vector/funny-cartoon-moose_6996-1314.jpg',
  }

  test('обновление данных профиля', async () => {
    // мокаем успешный запрос
    // mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))

    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: data },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data: data }))
    const result = await thunk.callThunk()

    // ожидаем вызова запроса
    expect(thunk.api.put).toHaveBeenCalled()
    // waitFor(() => {
    // ожидаем выполнения промиса
    expect(result.meta.requestStatus).toBe('fulfilled')
    // проверяем полученные данные
    expect(result.payload).toEqual(data)
    // })
  })

  test('ошибка обновления данных профиля от сервера', async () => {
    // мокаем ошибочный запрос
    const thunk = new TestAsyncThunk(updateProfileData)
    // thunk.api.put.mockReturnValue(Promise.reject({ status: 500 }))
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 500 }))
    const result = await thunk.callThunk()

    // ожидаем выполнения промиса со статусом rejected
    waitFor(() => {
      expect(result.meta.requestStatus).toBe('rejected')
      expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
    })
  })

  test('ошибка валидации при обновлении данных профиля', async () => {
    // мокаем ошибочный запрос
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: { ...data, lastname: undefined } },
    })
    // thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()

    // ожидаем выполнения промиса со статусом rejected
    waitFor(() => {
      expect(result.meta.requestStatus).toBe('rejected')
      expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    })
  })
})
