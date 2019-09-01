import React from 'react'
import { connect } from 'react-redux'
import { IState, ITeamProps } from '../types'

const Teams = (props: ITeamProps) => {
  const {
    data,
    selected
  } = props
  const [{ name = '' } = {}] = data.filter((team) => team.id === selected)

  return (
    <>
      {name}
    </>
  )
}

const mapStateToProps = (state: IState) => ({
  data: state.teams.data,
  pending: state.teams.pending,
  error: state.teams.error
})

export const ConnectedTeam: any = connect(mapStateToProps)(Teams as any)
