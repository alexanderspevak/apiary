import React from 'react'
import { connect } from 'react-redux'
import { IEventProps, IState } from '../types'
import { Container } from './Container'

import { EventResults } from './EventResults'
import { extractNumberOfGoals, structureEventResults } from './helpers'

const Event = (props: IEventProps) => {
  const {
    name,
    id,
    state,
    timeStartPlanned,
    eventResults,
    goals
  } = props
  const eventDate = (new Date(timeStartPlanned)).toLocaleString()
  const numberOfGoals = eventResults ? extractNumberOfGoals(id, eventResults) : 0
  const structuredEventResults = eventResults ? structureEventResults(id, eventResults) : null

  return numberOfGoals >= goals
    ? (
      <div>
        <h3> {name} {state} {eventDate} </h3>
        {structuredEventResults && <EventResults eventResults={structuredEventResults}/>}
      </div>
    ) : (
      <div></div>
    )
}

const mapGoalsToProps = (state: IState) => ({
  eventResults: state.eventResults.data,
  goals: state.goals.data
})
const EventsWithResults = connect(mapGoalsToProps)(Event as any)
const EventsContainer = Container(EventsWithResults)
const mapStateToProps = (state: IState) => ({
  data: state.events.data,
  pending: state.events.pending,
  error: state.events.error,
  eventResults: state.eventResults.data,
  goals: state
})

export const Events = connect(mapStateToProps)(EventsContainer)
