/*
<Least Recently Used>

- Cache Miss: Insert new item
- Cache Hit: move the recently used item into the first position

*/

// (3 <= cacheSize <= 10) , (5 <= tasks.length <= 1000)
function solution(cacheSize: number, tasks: number[]) {
  // definedProperty : can lock the obect's property  (no errors though)
  const cacheArray: number[] = [] // cannot lock if it's defined with let keyword
  Object.defineProperty(cacheArray, 'length', {
    value: cacheSize,
    writable: false,
  })

  for (let i = 0; i < tasks.length; ++i) {
    const targetIndex = cacheArray.indexOf(tasks[i])
    if (targetIndex === -1) {
      for (let j = cacheSize - 1; j > 0; --j) {
        cacheArray[j] = cacheArray[j - 1]
      }
    } else {
      for (let j = targetIndex; j > 0; --j) {
        cacheArray[j] = cacheArray[j - 1]
      }
    }
    cacheArray[0] = tasks[i]
  }

  return cacheArray
}

export { solution as getCachedItems }
