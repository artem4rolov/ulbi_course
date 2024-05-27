import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { StoreSchema } from 'app'
import { counterActions } from '../model/slice/conter-slice'

export const Counter = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector((state: StoreSchema) => state.counter.value)

  const increment = () => {
    dispatch(counterActions.increment())
    console.log('increment')
  }

  const decrement = () => {
    dispatch(counterActions.decrement())
    console.log('decrement')
  }

  return (
    <div>
      <span data-testid="counter-test-value" style={{ fontSize: '24px' }}>
        {counterValue}
      </span>
      <button
        data-testid="counter-test-increment"
        style={{ padding: '10px', fontSize: '24px' }}
        onClick={increment}
      >
        +
      </button>
      <button
        data-testid="counter-test-decrement"
        style={{ padding: '10px', fontSize: '24px' }}
        onClick={decrement}
      >
        -
      </button>
    </div>
  )
}
