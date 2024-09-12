import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit'
import { StoreSchema } from 'app'

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

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFunction<any>
  getState: () => StoreSchema
  actionCreateor: ActionCreatorType<Return, Arg, RejectedValue>

  constructor(actionCreateor: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreateor = actionCreateor
    this.dispatch = jest.fn()
    this.getState = jest.fn()
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreateor(arg)
    const result = await action(this.dispatch, this.getState, undefined)

    return result
  }
}
