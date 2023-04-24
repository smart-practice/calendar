import { CalendarCell } from '../types/date'
import { months, weekdays } from '../resources/date'
import { CalendarEvent } from '../types/event'
import { chunkArrayByStep } from './common'

export function dateTitle(year: number, month: number, day: number) {
  const date = new Date(year, month, day)
  const w = weekdays[date.getDay()]
  const m = months[month]

  return `${w}, ${m} ${day}`
}

export function daysInMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
}

export function prevMonthDate(date: Date) {
  const prev = new Date(date)
  prev.setDate(0)
  return prev
}

export function prevMonthIdx(date: Date) {
  const m = date.getMonth()
  return m === 0 ? 11 : m - 1
}

export function nextMonthIdx(date: Date) {
  return date.getMonth() === 11 ? 0 : date.getMonth() + 1
}

// TODO: Rewrite to reduce
export function dayCellsWithEvents(
  days: CalendarCell[],
  events: CalendarEvent[],
) {
  const res = days

  for (let i = 0; i < res.length; i++) {
    const cell = res[i]

    for (let j = 0; j < events.length; j++) {
      const event = events[j]
      const { year, month, day } = event

      if (cell.year === year && cell.month === month && cell.num === day) {
        if (Array.isArray(res[i].events)) {
          res[i].events!.push(event)
        } else {
          res[i].events = [event]
        }
      }
    }
  }

  return res
}

export function markToday(items: CalendarCell[]) {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  const day = today.getDate()

  return items.map(i => {
    if (i.year === year && i.month === month && i.num === day) {
      return { ...i, isToday: true }
    }
    return i
  })
}

export function dayCellsByDate(date: Date, events: CalendarEvent[]) {
  const ROWS = 6
  const COLS = 7
  const CELLS = ROWS * COLS

  const res: CalendarCell[] = []

  const idxFirstWeekend = date.getDay()

  // Заполнение левых соседей
  if (idxFirstWeekend !== 0) {
    const lastDayOfPrevMonth = prevMonthDate(date).getDate()

    const month = prevMonthIdx(date)
    const year = date.getFullYear() + (month === 0 ? -1 : 0)

    let i = idxFirstWeekend

    while (--i !== -1) {
      const num = lastDayOfPrevMonth - i
      res.push({
        isNeighbour: true,
        month,
        year,
        num,
      })
    }
  }

  // Заполнение текущего месяца
  {
    const month = date.getMonth()
    let i = 1

    while (i !== daysInMonth(date) + 1) {
      const payload: CalendarCell = {
        isNeighbour: false,
        year: date.getFullYear(),
        num: i,
        month,
      }

      if (i === 1) {
        payload.child = `${months[month].substring(0, 3)} ${i}`
      }

      res.push(payload)
      i++
    }
  }

  // Заполнение правых соседей
  {
    const month = nextMonthIdx(date)
    const year = date.getFullYear() + (month === 0 ? 1 : 0)

    let i = 0

    while (res.length !== CELLS) {
      const payload: CalendarCell = {
        isNeighbour: true,
        num: ++i,
        year,
        month,
      }

      if (i === 1) {
        payload.child = `${months[month].substring(0, 3)} ${i}`
      }

      res.push(payload)
    }
  }

  const cellWithMarkedToday = markToday(res)
  const cellsWithEvents = dayCellsWithEvents(cellWithMarkedToday, events)

  return chunkArrayByStep(cellsWithEvents, COLS)
}
