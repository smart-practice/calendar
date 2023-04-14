import { CalendarEvent } from './event'

export interface CalendarCell {
  num: number
  isNeighbour?: boolean
  isToday?: boolean
  child?: string
  events?: CalendarEvent[]
}
