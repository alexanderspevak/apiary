import { IGoalsAction, IGoalsState, IModelAction, IModelState } from '../types'
import {
  FETCH_ERROR,
  FETCH_PENDING,
  FETCH_SUCCESS, LOCAL_STORAGE_GOALS_KEY, SET_GOALS_FILTER
} from '../constants'

const initialState: IModelState = {
  pending: false,
  error: null,
  data: []
}

export const reducerBuilder = (prefix: string) => {
  return (state = initialState, action: IModelAction) => {
    switch (action.type) {
      case `${prefix}_${FETCH_PENDING}`:
        return {
          ...state,
          pending: true
        }
      case `${prefix}_${FETCH_SUCCESS}`:
        return {
          ...state,
          pending: false,
          data: action.payload
        }
      case `${prefix}_${FETCH_ERROR}`:
        return {
          ...state,
          pending: false,
          error: action.error
        }
      default:
        return state
    }
  }
}

const getGoalsFromLocalStorage = () => {
  const goals = localStorage.getItem(LOCAL_STORAGE_GOALS_KEY)

  if (goals) {
    return parseInt(goals)
  }

  return -1
}

const initialGoalsStateFilter: IGoalsState = {
  data: getGoalsFromLocalStorage()
}

export const goalsReducer = (state = initialGoalsStateFilter, action: IGoalsAction) => {
  switch (action.type) {
    case SET_GOALS_FILTER:
      return {
        ...state,
        data: action.goals
      }
    default:
      return state
  }
}
