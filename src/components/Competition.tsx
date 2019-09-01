import React from 'react'
import { connect } from 'react-redux'
import { ICompetition, IState } from '../types'
import { Events } from './Events'
import { Container } from './Container'

const Competition = (props: ICompetition) => {
  const {
    id,
    name,
    dateFrom,
    dateTo
  } = props

  return (
    <>
      <h1>{name}, {dateFrom} - {dateTo}</h1>
      <Events filter = {{ key: 'competitionId', id }}/>
    </>
  )
}

export const CompetitionContainer = Container(Competition)

const mapStateToProps = (state: IState) => ({
  data: state.competitions.data,
  pending: state.competitions.pending,
  error: state.competitions.error
})

export const Competitions = connect(mapStateToProps)(CompetitionContainer)
