import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk'

const todoReducer = (state = { lists: [] }, action) => {
  if (action.type === 'FETCH_LIST') {
    return {
      lists: action.payload
    }
  }

  return state
}

const store = createStore(todoReducer, applyMiddleware(thunkMiddleware));

export default store;