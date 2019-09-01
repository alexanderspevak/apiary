import { combineReducers } from 'redux'
import { reducerBuilder, goalsReducer } from './reducers'
import { fetchData } from './actions'
import {
  PREFIX_COMPETITIONS,
  PREFIX_EVENTS,
  PREFIX_EVENTS_RESULTS,
  PREFIX_TEAMS
} from '../constants'

const rootReducer = combineReducers({
  competitions: reducerBuilder(PREFIX_COMPETITIONS),
  events: reducerBuilder(PREFIX_EVENTS),
  eventResults: reducerBuilder(PREFIX_EVENTS_RESULTS),
  teams: reducerBuilder(PREFIX_TEAMS),
  goals: goalsReducer
})

export {
  rootReducer,
  goalsReducer,
  fetchData
}
