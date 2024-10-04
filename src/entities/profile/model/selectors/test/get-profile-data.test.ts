import { StateSchema } from 'app'
import { getProfileData } from '../get-profile-data'

describe('тест селектора для Profile Slice', () => {
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

  test('должен вернуть данные профиля', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { data: data },
    } as StateSchema

    expect(getProfileData(state as StateSchema)).toEqual(data)
  })
  test('должен вернуть undefined при пустом сторе', () => {
    const state: DeepPartial<StateSchema> = {} as StateSchema

    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
