import { DeepPartial } from 'shared/types'
import { ProfileSchema, ValidateProfileError } from '../../type/profile'
import { profileActions, profileSlice } from '../profile-slice'
import { Currency } from 'entities/currency'
import { Country } from 'entities/country'
import { updateProfileData } from '../../services/update-profile-data'

const data = {
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

describe('тест селекторов для слайса profileSlice', () => {
  test('изменение readOnly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    } as ProfileSchema

    expect(
      profileSlice.reducer(
        state as ProfileSchema,
        profileActions.setReadOnly(true),
      ),
    ).toStrictEqual({ readonly: true })
  })

  test('сброс изменений формы обновления данных пользователя', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: { ...data, username: '123' },
    } as ProfileSchema

    expect(
      profileSlice.reducer(state as ProfileSchema, profileActions.cancelEdit()),
    ).toStrictEqual({
      readonly: true,
      data,
      form: data,
      validateError: undefined,
    })
  })

  test('обновление данных пользователя', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: { ...data, username: '' },
    } as ProfileSchema

    expect(
      profileSlice.reducer(
        state as ProfileSchema,
        profileActions.updateProfile(data),
      ),
    ).toStrictEqual({
      data,
      form: data,
    })
  })

  test('тест asyncThunk action в состоянии pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileError.SERVER_ERROR],
    } as ProfileSchema

    expect(
      profileSlice.reducer(state as ProfileSchema, updateProfileData.pending),
    ).toStrictEqual({
      isLoading: true,
      validateError: undefined,
    })
  })

  test('тест asyncThunk action в состоянии fullfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    } as ProfileSchema

    expect(
      profileSlice.reducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, ''),
      ),
    ).toStrictEqual({
      isLoading: false,
      validateError: undefined,
      readonly: true,
      form: data,
      data,
    })
  })
})
