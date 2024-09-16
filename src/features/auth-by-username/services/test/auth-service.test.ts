import { loginByUserName } from '../auth-service'
import { userActions } from 'entities/user'
import { TestAsyncThunk } from 'shared/helpers/tests/test-async-thunk/test-async-thunk'

describe('тест async thunk authByUserName', () => {
  // let dispatch: Dispatch
  // let getState: () => StoreSchema

  // beforeEach(() => {
  //   dispatch = jest.fn()
  //   getState = jest.fn()
  // })

  // test('test async login', async () => {
  //   const userValue = { name: 'test_user', id: '1' }
  //   // мокаем успешный запрос
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
  //   const action = loginByUserName({ username: 'test_user', password: '123' })
  //   const result = action(dispatch, getState, undefined)

  //   // ожидаем выполнения промиса
  //   expect((await result).meta.requestStatus).toBe('fulfilled')
  //   // проверяем заполнение стейта после успешного запроса
  //   expect(dispatch).toHaveBeenCalledWith(
  //     userActions.setAuthData({ name: 'test_user', id: '1' }),
  //   )
  //   // диспатч выполняется: 1. вызов asyncThunk (loginByUserName) 2. заполнение стейта (userActions.setAuthData) 3. вернулся ответ (в builder async reducers пришел статус fullfilled)
  //   expect(dispatch).toHaveBeenCalledTimes(3)
  // })

  // test('test async login with error', async () => {
  //   // мокаем ошибочный запрос
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
  //   const action = loginByUserName({ username: '123', password: '123' })
  //   const result = action(dispatch, getState, undefined)

  //   // ожидаем выполнения промиса со статусом rejected
  //   expect((await result).meta.requestStatus).toBe('rejected')
  //   // диспатч выполняется: 1. вызов asyncThunk (loginByUserName) 2. вернулся ответ (в builder async reducers пришел статус rejected)
  //   expect(dispatch).toHaveBeenCalledTimes(2)
  // })

  test('test async login success', async () => {
    const userValue = { name: 'test_user', id: '1' }
    // мокаем успешный запрос
    // mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))

    const thunk = new TestAsyncThunk(loginByUserName)
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))
    const result = await thunk.callThunk({ username: '123', password: '123' })

    // ожидаем выполнения промиса
    expect(result.meta.requestStatus).toBe('fulfilled')
    // проверяем заполнение стейта после успешного запроса
    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData({ name: 'test_user', id: '1' }),
    )
    // диспатч выполняется: 1. вызов asyncThunk (loginByUserName) 2. заполнение стейта (userActions.setAuthData) 3. вернулся ответ (в builder async reducers пришел статус fullfilled)
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
  })

  test('test async login with error', async () => {
    //   // мокаем ошибочный запрос
    // mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

    const thunk = new TestAsyncThunk(loginByUserName)
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk({ username: '123', password: '123' })

    // ожидаем выполнения промиса со статусом rejected
    expect(result.meta.requestStatus).toBe('rejected')
    // диспатч выполняется: 1. вызов asyncThunk (loginByUserName) 2. вернулся ответ (в builder async reducers пришел статус rejected)
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
  })
})
