export function chunkArrayByStep(a: any[], s: number) {
  return a.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / s)

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])
}
