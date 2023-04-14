import { CalendarEvent, EventType } from '../types/event'

export const eventTypes: EventType[] = ['event', 'task', 'reminder']

export const mockEvents: CalendarEvent[] = [
  { title: 'Великая среда', type: 'event', id: 1, date: new Date() },
  { title: 'Щас бы пивка', type: 'event', id: 2, date: new Date() },
  { title: 'Вчера', type: 'task', id: 3, date: new Date(2023, 3, 11) },
  {
    title: 'Напоминание на завтра',
    type: 'reminder',
    id: 4,
    date: new Date(2023, 3, 13),
  },
  {
    title: 'Православная Пасха',
    type: 'holiday',
    id: 5,
    date: new Date(2023, 3, 16),
  },
  {
    title: 'Праздник Весны и Труда',
    type: 'holiday',
    id: 6,
    date: new Date(2023, 4, 1),
  },
]
