import { useSelector, useDispatch } from 'react-redux'
import { spendMoney, spendMoneyAsync } from '../store/action'

export default function Woman() {
  const money = useSelector((state) => state)
  const dispatch = useDispatch()
  return (
    <div>
      <h3>Woman Component</h3>
      <h3>Money: {money}</h3>
      <button onClick={() => dispatch(spendMoney(1000))}>
        Spend Money-1000
      </button>
      <button onClick={() => dispatch(spendMoneyAsync(300))}>
        Barber Shop Async
      </button>
    </div>
  )
}
