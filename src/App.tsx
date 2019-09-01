import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { fetchData, rootReducer } from './store'
import { Competitions, ConnectedGoalsFilter } from './components'
import { routes } from './store/routes'
import {
  PREFIX_COMPETITIONS,
  PREFIX_EVENTS,
  PREFIX_EVENTS_RESULTS,
  PREFIX_TEAMS
} from './constants'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

const App = () => {
  try {
    store.dispatch(fetchData(routes.competitions, PREFIX_COMPETITIONS) as any)
    store.dispatch(fetchData(routes.events, PREFIX_EVENTS) as any)
    store.dispatch(fetchData(routes.eventResults, PREFIX_EVENTS_RESULTS) as any)
    store.dispatch(fetchData(routes.teams, PREFIX_TEAMS) as any)

    return (
      <Provider store = {store} >
        <Competitions/>
        <ConnectedGoalsFilter/>
      </Provider>
    )
  } catch (e) {
    return (
      <div>
        error
      </div>
    )
  }
}

export default App
