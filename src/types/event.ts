export type EventType = 'event' | 'task' | 'reminder' | 'holiday'

export interface CalendarEvent {
  id: number
  title: string
  type: EventType
  date: Date
}
