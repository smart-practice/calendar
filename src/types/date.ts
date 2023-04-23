import { CalendarEvent } from './event'

export interface CalendarCell {
  num: number
  month: number
  year: number
  isNeighbour?: boolean
  isToday?: boolean
  child?: string
  events?: CalendarEvent[]
}
