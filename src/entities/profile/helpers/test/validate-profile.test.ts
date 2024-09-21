import { TestAsyncThunk } from 'shared/helpers/tests/test-async-thunk/test-async-thunk'
import { waitFor } from '@testing-library/react'
import { validateProfile } from '../validate-profile'
import { Country } from 'entities/country'
import { Currency } from 'entities/currency'
import { ValidateProfileError } from 'entities/profile/model/type/profile'

describe('тест helper валидация обновления профиля', () => {
  test('проверка коррекнтых введенных данных для обновления профиля', async () => {
    const data = {
      firstname: 'Артем',
      lastname: 'Фролов',
      age: 28,
      currency: Currency.RUB,
      country: Country.Russia,
      city: 'Volgograd123',
      username: 'admin',
      avatar:
        'https://img.freepik.com/premium-vector/funny-cartoon-moose_6996-1314.jpg',
    }

    const result = validateProfile(data)

    // ожидаем пустой массив, т.к. введенные данные коррекнты
    expect(result).toEqual([])
  })

  test('проверка НЕкоррекнтых введенных данных для обновления профиля', async () => {
    const data = {
      firstname: 'Артем',
      lastname: undefined,
      age: NaN,
      currency: Currency.RUB,
      country: Country.Russia,
      city: 'Volgograd123',
      username: 'admin',
      avatar:
        'https://img.freepik.com/premium-vector/funny-cartoon-moose_6996-1314.jpg',
    }

    const result = validateProfile(data)

    // ожидаем ошибки на пользовательские данные и некоррентый возраст
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
    ])
  })
})
