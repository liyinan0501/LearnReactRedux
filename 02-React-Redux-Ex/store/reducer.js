export default function reducer(state = 1000, action) {
  if (action.type === 'ADD_MONEY') return state + action.money
  if (action.type === 'SPEND_MONEY') return state - action.money
  return state
}
