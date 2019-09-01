import React from 'react'
import { connect } from 'react-redux'
import { setGoalsFilter } from '../store/actions'
import { IState } from '../types'
import { Dispatch } from 'redux'

const GoalsFilter = (props: any) => {
  const {
    setGoalsFilter
  } = props

  const handleInput = (event: any) => {
    const {
      target: {
        value
      }
    } = event

    const parsedValue = parseInt(value)
    setGoalsFilter(isNaN(parsedValue) ? -1 : parsedValue)
  }

  return (
    <label>
      Set minimum goals per match:
      <input type="text" onChange = {handleInput}/>
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
