import { CalendarCell } from '../types/date'
import { months } from '../resources/date'
import Cell from '../components/Cell.vue'

export const daysInMonth = (year: number, month: number) =>
  new Date(year, month + 1, 0).getDate()

export const daysOfMonth = (date: Date) => {
  let res: Array<CalendarCell[]> = [[]]

  const days = daysInMonth(date.getFullYear(), date.getMonth())

  if (date.getDay() !== 0) {
    // Copy date
    const prev = new Date(date)
    prev.setDate(0)

    let i = 0

    while (i !== prev.getDay() + 1) {
      // TODO: rewrite to push [O(1)]
      res[0].unshift({
        num: prev.getDate() - i,
        isNeighbour: true,
      })
      i++
    }
  }

  const today = new Date()

  for (let i = 1; i <= days; i++) {
    const payload: CalendarCell = {
      num: i,
    }

    if (
      i === today.getDate() &&
      today.getMonth() === date.getMonth() &&
      today.getFullYear() === date.getFullYear()
    ) {
      payload.isToday = true
    }

    if (payload.num === 1) {
      payload.child = `${payload.num} ${months[date.getMonth()].slice(0, 3)}`
    }

    const lastRow = res[res.length - 1]

    if (lastRow.length && lastRow.length % 7 === 0) {
      res.push([payload])
    } else {
      lastRow.push(payload)
    }
  }

  if (res[res.length - 1].length !== 7) {
    let newDay = 1

    while (res[res.length - 1].length !== 7) {
      const payload: Cell = { num: newDay, isNeighbour: true }

      if (payload.num === 1) {
        const m = date.getMonth() === 11 ? 0 : date.getMonth()
        payload.child = `${payload.num} ${months[m + 1].slice(0, 3)}`
      }

      res[res.length - 1].push(payload)
      newDay++
    }
  }

  return res
}
