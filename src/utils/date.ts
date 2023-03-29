interface Cell {
  num: number
  isNeighbour?: boolean
}

export const daysInMonth = (year: number, month: number) =>
  new Date(year, month + 1, 0).getDate()

export const daysOfMonth = (date: Date) => {
  let res: Array<Cell[]> = [[]]

  const days = daysInMonth(date.getFullYear(), date.getMonth())

  if (date.getDay() !== 0) {
    // Copy date
    const prev = new Date(date)
    prev.setDate(0)

    let i = 0

    while (i !== prev.getDay() + 1) {
      // TODO: rewrite to push [O(1)]
      res[0].unshift({ num: prev.getDate() - i, isNeighbour: true })
      i++
    }
  }

  for (let i = 1; i <= days; i++) {
    const payload: Cell = { num: i }
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
      res[res.length - 1].push({ num: newDay, isNeighbour: true })
      newDay++
    }
  }

  return res
}
