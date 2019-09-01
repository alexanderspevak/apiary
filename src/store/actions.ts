import axios from 'axios'
import { Dispatch } from 'redux'
import {
  FETCH_ERROR,
  FETCH_PENDING,
  FETCH_SUCCESS, SET_GOALS_FILTER
} from '../constants'

export const fetchData = (route: string, prefix: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchPending(prefix))
      const { data } = await axios.get(route)
      dispatch(fetchSuccess(data as any, prefix))
    } catch (error) {
      dispatch(fetchError(error, prefix))
    }
  }
}

export const fetchPending = (prefix: string) => {
  return {
    type: `${prefix}_${FETCH_PENDING}`
  }
}

export const fetchSuccess = (payload: object[], prefix: string) => {
  return {
    type: `${prefix}_${FETCH_SUCCESS}`,
    payload
  }
}

export const fetchError = (error: Error, prefix: string) => {
  return {
    type: `${prefix}_${FETCH_ERROR}`,
    error
  }
}

export const setGoalsFilter = (goals: number) => {
  return {
    type: SET_GOALS_FILTER,
    goals
  }
}
