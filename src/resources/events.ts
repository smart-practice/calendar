import { CalendarEvent, EventType } from '../types/event'

export const eventTypes: EventType[] = ['event', 'task', 'reminder']

export const mockEvents: CalendarEvent[] = [
  {
    title: 'Orthodox Easter',
    type: 'holiday',
    id: 1,
    date: new Date(2023, 3, 16),
  },
  {
    title: 'Great Saturday',
    type: 'reminder',
    id: 2,
    date: new Date(2023, 3, 15),
  },
  {
    title: 'World Webmasters',
    type: 'event',
    id: 3,
    date: new Date(2023, 3, 4),
  },
  {
    title: 'Submit a project',
    type: 'task',
    id: 4,
    date: new Date(2023, 3, 19),
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
]
