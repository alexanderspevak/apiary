import React from 'react'
import { connect } from 'react-redux'
import { IEventResult, IState } from '../types'
import { Container } from './Container'

import EventResultsContainer from './EventResults'
import { extractNumberOfGoals } from './helpers'

export const Events = (props: any) => {
  const { name, id, state, timeStartPlanned, eventResults } = props
  const eventDate = (new Date(timeStartPlanned)).toLocaleString()
  const parsedId = (typeof id) === 'string' ? parseInt(id) : id
  const numberOfGoals = eventResults ? extractNumberOfGoals(parsedId, eventResults) : 0

  return (
    <div>
      <h5> {name} {state} {eventDate} </h5>
      <EventResultsContainer filter = {{ key: 'eventId', id }}/>
    </div>)
}

const mapEventResultsToProps = (state: IState) => ({
  eventResults: state.eventResults.data
})
const EventsWithResults = connect(mapEventResultsToProps)(Events)
const EventsContainer = Container(EventsWithResults)
const mapStateToProps = (state: IState) => ({
  data: state.events.data,
  pending: state.events.pending,
  error: state.events.error,
  eventResults: state.eventResults.data
})

export default connect(mapStateToProps)(EventsContainer)
