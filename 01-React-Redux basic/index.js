import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
/*
  1. npm install redux
     npm install react-redux
  2. import { Provider } from 'react-redux'
  3. 在任意的子组件中都可以获取到store
*/

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
)

// import reportWebVitals from './reportWebVitals'
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
