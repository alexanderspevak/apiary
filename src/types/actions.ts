import { ICompetition } from './models'

interface IBaseAction {
  type: string
}
export interface IModelAction extends IBaseAction {
  payload: ICompetition[]
  error: Error | null
}

export interface IGoalsAction extends IBaseAction {
  goals: number
}
