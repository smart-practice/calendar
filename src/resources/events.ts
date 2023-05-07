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
  {
    title: 'Weekend',
    type: 'holiday',
    id: 6,
    year: 2023,
    month: 4,
    day: 8,
    desc: '',
  },
  {
    title: 'Victory Day',
    type: 'holiday',
    id: 7,
    year: 2023,
    month: 4,
    day: 9,
    desc: 'Victory Day is a celebration of the victory of the Red Army and the Soviet people over Nazi Germany in the Great Patriotic War of 1941-1945. It was established by the Decree of the Presidium of the Supreme Soviet of the USSR of May 8, 1945 and is celebrated annually on May 9. In 1945-1947 and since 1965, Victory Day is a non—working holiday. May 9 is one of the days of military glory of Russia.',
  },
  {
    title: 'Day of Russia',
    type: 'holiday',
    id: 8,
    year: 2023,
    month: 4,
    day: 12,
    desc: 'Russia Day is one of the "youngest" and most important public holidays in the country, celebrated annually on June 12. It was on this day in 1990 that the Declaration on the State Sovereignty of Russia was adopted, in which the primacy of the Constitution and its laws was proclaimed. At the same time, our country was given a new name – the Russian Federation.',
  },
]
