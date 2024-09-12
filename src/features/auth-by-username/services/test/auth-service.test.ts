import axios from 'axios'
import { loginByUserName } from '../auth-service'
import { Dispatch } from '@reduxjs/toolkit'
import { StoreSchema } from 'app'

jest.mock('axios')

const mockedAxios = jest.mocked(axios)

describe('тест async thunk authByUserName', () => {
  let dispatch: Dispatch
  let getState: () => StoreSchema

  beforeEach(() => {
    dispatch = jest.fn()
    getState = jest.fn()
  })

  test('test async login', async () => {
    mockedAxios.post.mockReturnValue(
      Promise.resolve({ data: { username: 'test_user', id: '1' } }),
    )

    const action = loginByUserName({ username: '123', password: '123' })
    const result = action(dispatch, getState, undefined)

    console.log(result)

    // expect(getAuthPassword(state as StoreSchema)).toEqual('1234')
  })
})
