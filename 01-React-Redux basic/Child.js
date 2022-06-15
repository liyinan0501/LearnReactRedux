import { useStore, useSelector, useDispatch } from 'react-redux'
import { add, minus } from './store/action'

export default function Child() {
  // 调用useStore()就可以得到store对象
  // 调用useSelector() 直接得到store中的state
  // 方法1
  const store = useStore()
  // 方法2
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  return (
    <div>
      <h3>Child Component {store.getState()}</h3>
      <button
        onClick={() => {
          store.dispatch(add())
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          store.dispatch(minus())
        }}
      >
        -1
      </button>
      {/* <h3>Child Component {state}</h3>
      <button
        onClick={() => {
          dispatch(add())
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch(minus())
        }}
      >
        -1
      </button> */}
    </div>
  )
}
