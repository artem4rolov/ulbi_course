import { authByUserNameActions, authByUserNameReducer } from './auth-slice'
import { AuthSchema } from '../types/auth.types'
import { loginByUserName } from '../../services/auth-service'

describe('тест селекторов для слайса authByUserName', () => {
  test('изменение username', () => {
    const state: DeepPartial<AuthSchema> = {
      username: '123',
    }

    expect(
      authByUserNameReducer(
        state as AuthSchema,
        authByUserNameActions.setUserName('123 test'),
      ),
    ).toStrictEqual({ username: '123 test' })
  })

  test('изменение password', () => {
    const state: DeepPartial<AuthSchema> = {
      password: '12345',
    }

    expect(
      authByUserNameReducer(
        state as AuthSchema,
        authByUserNameActions.setUserPassword('12345 test'),
      ),
    ).toStrictEqual({ password: '12345 test' })
  })

  test('изменение isLoading при успешном запросе', () => {
    const state: DeepPartial<AuthSchema> = {
      isLoading: true,
      error: '',
    }

    expect(
      authByUserNameReducer(state as AuthSchema, loginByUserName.fulfilled),
    ).toStrictEqual({ isLoading: false, error: '' })
  })
})
