import React from 'react'
import { connect } from 'react-redux'
import { ICompetition, IEvent, IState } from '../../types'
import Events from '../events/Event'
import { Container } from '../Container'

const Competition = (props: ICompetition) => {
  const {
    id,
    name,
    dateFrom,
    dateTo
  } = props

  return (
    <>
      <h3>{name}, {dateFrom} - {dateTo}</h3>
      <Events filter = {{ key: 'competitionId', id }}/>
    </>
  )
}

export const CompetitionContainer = Container(Competition)

const mapStateToProps = (state: IState) => {
  return {
    data: state.competitions.data,
    pending: state.competitions.pending,
    error: state.competitions.error
  }
}

export default connect(mapStateToProps)(CompetitionContainer)
