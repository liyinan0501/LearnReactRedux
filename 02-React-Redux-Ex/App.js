import Woman from './components/woman'
import Man from './components/man'
import { useSelector } from 'react-redux'

export default function App() {
  const money = useSelector((state) => state)
  return (
    <div>
      <h1>App Component</h1>
      <h2>Family Money:{money} </h2>
      <hr />
      <Woman></Woman>
      <hr />
      <Man></Man>
    </div>
  )
}
