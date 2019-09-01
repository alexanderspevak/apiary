import React from 'react'
import { connect } from 'react-redux'
import { IState, ITeamProps } from '../types'

const Teams = (props: ITeamProps) => {
  const {
    data,
    selected,
    error,
    pending
  } = props
  const [{ name = '' } = {}] = data.filter((team) => team.id === selected)

  if (error) {
    return <>Error</>
  }
  return pending
    ? (
      <>Fetching...</>)
    : (<>{name}</>
    )
}

const mapStateToProps = (state: IState) => ({
  data: state.teams.data,
  pending: state.teams.pending,
  error: state.teams.error
})

export const ConnectedTeam: any = connect(mapStateToProps)(Teams as any)
