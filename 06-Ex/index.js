import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './store/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App></App>
  </Provider>
)

/* 
  redux
    createStore, applyMiddleware, combineReducer

  react-redux
    Provider, userSelector, useDispatch
  
  redux-thunk
    import thunk from 'redux-thunk'
  */
