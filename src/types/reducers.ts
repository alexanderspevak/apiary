import { ICompetition, IEvent, IEventResult, ITeam } from './models'

interface IBaseReducer {
  pending: boolean
  error : null | Error
}

export interface IModelState extends IBaseReducer {
  data: ICompetition[] | IEvent[] | ITeam[] | IEventResult[]
}

export interface IState {
  competitions: IModelState
  events: IModelState
  teams: IModelState
  eventResults: IModelState,
  goals: IGoalsState
}

export interface IGoalsState {
  data: null | number
}
