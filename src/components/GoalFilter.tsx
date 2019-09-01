import React from 'react'
import { connect } from 'react-redux'
import { setGoalsFilter } from '../store/actions'
import { IState } from '../types'
import { Dispatch } from 'redux'
import { LOCAL_STORAGE_GOALS_KEY } from '../constants'

const GoalsFilter = (props: any) => {
  const {
    setGoalsFilter,
    goals = -1
  } = props

  const handleInput = (event: any) => {
    const {
      target: {
        value
      }
    } = event

    const parsedValue = parseInt(value)

    handleStore(isNaN(parsedValue) ? -1 : parsedValue)
  }

  const handleStore = (goals: number) => {
    localStorage.setItem(LOCAL_STORAGE_GOALS_KEY, `${goals}`)
    setGoalsFilter(goals)
  }

  return (
    <label>
      Set minimum goals per match:
      <input type="text" onChange = {handleInput} value={goals > -1 ? goals : ''}/>
    </label>
  )
}

function mapStateToProps (state:IState) {
  return {
    goals: state.goals.data
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setGoalsFilter: (goals: number) => dispatch(setGoalsFilter(goals))
  }
}
export const ConnectedGoalsFilter = connect(mapStateToProps, mapDispatchToProps)(GoalsFilter)
