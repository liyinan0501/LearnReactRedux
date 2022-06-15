import Man from './components/Man'
import Woman from './components/Woman'
import { useSelector } from 'react-redux'

export default function App() {
  const money = useSelector((state) => state)
  return (
    <div>
      <h1>Root Component</h1>
      <h2>Family: {money} Euros</h2>
      <hr />
      <Man></Man>
      <hr />
      <Woman></Woman>
      <button
        onClick={() =>
          console.log(Math.floor(Math.random() * (10 - 1 + 1) + 1))
        }
      >
        Buy or Not
      </button>
    </div>
  )
}
