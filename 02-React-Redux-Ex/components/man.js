import { useSelector, useDispatch } from 'react-redux'
import { addMoney } from '../store/action'
export default function Man() {
  const money = useSelector((state) => state)
  const dispatch = useDispatch()
  return (
    <div>
      <h3>Man Component</h3>
      <div>Money: {money}</div>
      <button onClick={() => dispatch(addMoney(100))}>
        Add Money (Working) +100{' '}
      </button>
      <button onClick={() => dispatch(addMoney(1000))}>
        Add Money (Investing) +1000
      </button>
    </div>
  )
}
