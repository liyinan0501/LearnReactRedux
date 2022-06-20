import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'

/* 
    '@reduxjs/toolkit':
    Note that this one configureStore call automatically does all the usual setup work you'd have done manually:
    The slice reducers were automatically passed to combineReducers()
    The redux-thunk middleware was automatically added
    Dev-mode middleware was added to catch accidental mutations
    The Redux DevTools Extension was automatically set up
    The middleware and DevTools enhancers were composed together and added to the store
*/

// const store = createStore(reducer, applyMiddleware(thunk))
export const store = configureStore({
  reducer,
})

export default store
