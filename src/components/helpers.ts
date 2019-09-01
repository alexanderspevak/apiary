import { IEventResult } from '../types'

export const extractNumberOfGoals = (eventId: any, eventResults: IEventResult[]) => {
  const parsedEventId = (typeof eventId) === 'string' ? parseInt(eventId) : eventId

  return eventResults.reduce((previousValue, currentValue: any) => {
    const currentId = (typeof currentValue.eventId) === 'string' ? parseInt(currentValue.eventId) : currentValue.eventId

    return previousValue + (currentId === parsedEventId ? currentValue.score : 0)
  }, 0)
}

export const structureEventResults = (id: any, eventResults: IEventResult[]) => {
  const parsedId = (typeof id) === 'string' ? parseInt(id) : id
  const currentEventResults = eventResults.filter((eventResult: any) => {
    return eventResult.eventId === parsedId
  })

  return currentEventResults.length === 2 ? {
    eventId: id,
    teamA: {
      score: currentEventResults[0].score,
      teamId: currentEventResults[0].teamId
    },
    teamB: {
      score: currentEventResults[1].score,
      teamId: currentEventResults[1].teamId
    }
  } : null
}

export const parseDate = (dateString: string) => {
  const dateValue = Date.parse(dateString)

  return isNaN(dateValue) ? dateString : (new Date(dateString)).toLocaleString()
}
