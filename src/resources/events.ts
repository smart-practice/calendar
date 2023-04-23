import { CalendarEvent, EventType } from '../types/event'

export const eventTypes: EventType[] = ['event', 'task', 'reminder']

export const mockEvents: CalendarEvent[] = [
  {
    title: 'Orthodox Easter',
    type: 'holiday',
    id: 1,
    year: 2023,
    month: 3,
    day: 16,
  },
  {
    title: 'Great Saturday',
    type: 'reminder',
    id: 2,
    year: 2023,
    month: 3,
    day: 15,
  },
  {
    title: 'Submit a project',
    type: 'task',
    id: 4,
    year: 2023,
    month: 3,
    day: 19,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    title: 'Labour Day',
    type: 'holiday',
    id: 5,
    year: 2023,
    month: 4,
    day: 1,
    desc: 'This day is considered a symbol of spring, it embodies respect for any creative work. Rallies, competitive and concert programs, actions and flash mobs are held throughout the country in cultural institutions, squares and streets, parks and squares.',
  },
]
