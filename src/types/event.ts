export type EventType = 'event' | 'task' | 'reminder'

export interface CalendarEvent {
  id: number
  title: string
  type: EventType
  date: Date
}
