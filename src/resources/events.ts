import { CalendarEvent, EventType } from '../types/event'

export const eventTypes: EventType[] = ['event', 'task', 'reminder']

export const mockEvents: CalendarEvent[] = [
  { title: 'event', type: 'event', id: 1, date: new Date() },
  { title: 'task', type: 'task', id: 1, date: new Date(2023, 3, 11) },
  { title: 'Reminder', type: 'reminder', id: 1, date: new Date(2023, 3, 13) },
]
