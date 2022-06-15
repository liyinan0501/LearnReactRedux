import { useDispatch, useSelector } from 'react-redux'
import { spendMoney } from '../store/action'
export default function Woman() {
  const money = useSelector((state) => state)
  const dispatch = useDispatch()
  return (
    <div>
      <h3>Woman Component</h3>
      <div>Money:{money}</div>
      <button
        onClick={() => {
          dispatch(spendMoney(2000))
        }}
      >
        Spend Money -2000
      </button>
    </div>
  )
}
