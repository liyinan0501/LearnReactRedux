import { ADD_MONEY, SPEND_MONEY } from './action_type'
import { combineReducers } from 'redux'

function reducer_money(state = 1000, action) {
  if (action.type === ADD_MONEY) return state + action.money
  if (action.type === SPEND_MONEY) {
    if (state === 0) {
      return alert('no money')
    }
    return state - action.money
  }
  return state
}

function reducer_user(state = { username: 'admin', token: '123' }, action) {
  return state
}

const rootReducer = combineReducers({
  reducer_money,
  reducer_user,
})

export default rootReducer
