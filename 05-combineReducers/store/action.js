import { ADD_MONEY, SPEND_MONEY } from './action_type'

export const addMoney = (money) => ({ type: ADD_MONEY, money })
export const spendMoney = (money) => ({ type: SPEND_MONEY, money })
export const spendMoneyAsync = (money) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(spendMoney(money))
    }, 3000)
  }
}
