import { createStore,combineReducers, applyMiddleware } from 'redux'
import User from '../Reducers/user'
import thunk from 'redux-thunk';  

const store = createStore(combineReducers(
    {user:User})
    ,applyMiddleware(thunk))

export default store