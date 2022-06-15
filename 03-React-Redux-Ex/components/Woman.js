import { useSelector, useDispatch } from 'react-redux'
import { spendMoney } from '../store/action'

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
      <button onClick={() => dispatch(spendMoney(500))}>Spend Money-500</button>
    </div>
  )
}
