export interface IEventResult {
  id: number
  eventId: number
  teamId: number
  score: number
}

export interface IEvent {
  id: number
  competitionId: number
  name: string
  state: string
  timeStartPlanned: string
}

export interface ICompetition {
  id: number
  name: string
  dateFrom: string
  dateTo: string
}

export interface ITeam {
  id: number
  name: string
}

export interface IStructuredEventResults {
  eventId: number
  teamA: ITeamScore
  teamB: ITeamScore
}

export interface ITeamScore {
  teamId: number
  score: number
}

export interface IEventProps extends IEvent {
  goals: number
  eventResults: IEventResult[]
  eventResultsError: Error,
  eventResultsPending: boolean
  pending: boolean
}

export interface ITeamProps extends ITeam {
  selected: number
  data: ITeam[]
  error: Error
  pending: boolean
}
