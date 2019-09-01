import { combineReducers } from 'redux'
import { modelReducer } from './reducer'
import { fetchData } from './actions'

const rootReducer = combineReducers({
  competitions: modelReducer
})

export {
  rootReducer,
  fetchData
}
