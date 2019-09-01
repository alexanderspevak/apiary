import { IModelAction, IModelState } from '../types'
import {
  FETCH_ERROR,
  FETCH_PENDING,
  FETCH_SUCCESS
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
