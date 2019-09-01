import axios from 'axios'
import { Dispatch } from 'redux'
import {
  FETCH_ERROR,
  FETCH_PENDING,
  FETCH_SUCCESS
} from '../constants'

export const fetchData = (route: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchPending())
      const { data } = await axios.get(route)
      dispatch(fetchSuccess(data as any))
    } catch (error) {
      dispatch(fetchError(error))
    }
  }
}

export const fetchPending = () => {
  return {
    type: FETCH_PENDING
  }
}

export const fetchSuccess = (competitions: any) => {
  return {
    type: FETCH_SUCCESS,
    payload: competitions
  }
}

export const fetchError = (error: Error) => {
  return {
    type: FETCH_ERROR,
    error
  }
}
