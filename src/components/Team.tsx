import React from 'react'
import { connect } from 'react-redux'
import { IState, ITeam } from '../types'
import { Container } from './Container'

const Team = (props: ITeam) => {
  const {
    name
  } = props

  return (
    <>
      {name}
    </>
  )
}

export const TeamContainer = Container(Team)

const mapStateToProps = (state: IState) => ({
  data: state.teams.data,
  pending: state.teams.pending,
  error: state.teams.error
})

export const Teams = connect(mapStateToProps)(TeamContainer)
