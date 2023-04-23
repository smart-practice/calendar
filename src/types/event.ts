export type EventType = 'event' | 'task' | 'reminder' | 'holiday'

export interface CalendarEvent {
  id: number
  title: string
  type: EventType
  year: number
  month: number
  day: number
  desc?: string
}

export type CreateEvent = Pick<CalendarEvent, 'year' | 'month' | 'day'>
