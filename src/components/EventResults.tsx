import React from 'react'
import { IStructuredEventResults, ITeamScore } from '../types'
import { ConnectedTeam } from './Team'

export const EventResults = (props: {eventResults: IStructuredEventResults}) => {
  const {
    eventResults,
    eventResults: {
      teamA,
      teamB
    }
  } = props

  return eventResults ? (
    <div>
      <EventResult {...teamA}/> : <EventResult {...teamB}/>
    </div>
  ) : (
    <div></div>
  )
}

const EventResult = (props: ITeamScore) => {
  const {
    teamId,
    score
  } = props

  return (
    <><ConnectedTeam selected={teamId}/> {score} </>
  )
}
