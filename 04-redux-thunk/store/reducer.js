import { ADD_MONEY, SPEND_MONEY } from './action_type'

export default function reducer(state = 1000, action) {
  if (action.type === ADD_MONEY) return state + action.money
  if (action.type === SPEND_MONEY) {
    if (state === 0) {
      return alert('no money')
    }
    return state - action.money
  }
  return state
}
