import Man from './components/Man'
import Woman from './components/Woman'
import { useSelector } from 'react-redux'

export default function App() {
  const money = useSelector((state) => state.reducer_money)
  const user = useSelector((state) => state.reducer_user.username)
  const token = useSelector((state) => state.reducer_user.token)
  return (
    <div>
      <h1>Root Component</h1>
      <h2>Family: {money} Euros</h2>
      <hr />
      <Man></Man>
      <hr />
      <Woman></Woman>
      <hr />
      <hr />
      <hr />
      <h1>User Control</h1>
      <div>User Account:{user}</div>
      <div>User Token: {token}</div>
    </div>
  )
}
