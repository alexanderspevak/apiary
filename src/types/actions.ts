import { IBaseModels } from './models'

interface IAction {
  type: string
  payload: IBaseModels
}
