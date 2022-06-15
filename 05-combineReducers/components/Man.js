import { useSelector, useDispatch } from 'react-redux'
import { addMoney } from '../store/action'
export default function Man() {
  const money = useSelector((state) => state.reducer_money)
  const dispatch = useDispatch()
  return (
    <div>
      <h3>Man Component</h3>
      <h3>Money: {money} </h3>
      <button onClick={() => dispatch(addMoney(1000))}>Add Money+1000</button>
      <button onClick={() => dispatch(addMoney(500))}>Add Money+500</button>
    </div>
  )
}
