import { AsyncThunkAction } from '@reduxjs/toolkit'
import { StateSchema } from 'app'
import axios, { AxiosStatic } from 'axios'

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg,
) => AsyncThunkAction<
  Return,
  Arg,
  {
    rejectValue: RejectedValue
    // state?: unknown
    // dispatch?: Dispatch
    // extra?: unknown
    // serializedErrorType?: unknown
    // pendingMeta?: unknown
    // fulfilledMeta?: unknown
    // rejectedMeta?: unknown
  }
>

jest.mock('axios')

const mockedAxios = jest.mocked(axios)

// это универсальный класс для тестирования компонентов с asyncThunk'ами
export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFunction<any>
  getState: () => StateSchema
  actionCreateor: ActionCreatorType<Return, Arg, RejectedValue>
  api: jest.MockedFunctionDeep<AxiosStatic>
  navigate: jest.MockedFunction<any>

  constructor(
    actionCreateor: ActionCreatorType<Return, Arg, RejectedValue>,
    state?: DeepPartial<StateSchema>,
  ) {
    this.actionCreateor = actionCreateor
    this.dispatch = jest.fn()
    this.getState = jest.fn(() => state as StateSchema)
    this.navigate = jest.fn()
    this.api = mockedAxios
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreateor(arg)
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate,
    })

    return result
  }
}
