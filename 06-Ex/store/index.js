import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

/* 
    1. npm install redux-thunk 中间件
    2. import thunk from 'redux-thunk'
    3. import { createStore, applyMiddleware } from 'redux'
    4. createStore(reducer, applyMiddleware(thunk))
    5. 允许action写中间件异步代码
*/

const store = createStore(reducer, applyMiddleware(thunk))

export default store
