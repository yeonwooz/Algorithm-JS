/*
KAKAO 2018 

*/

function solution(cacheSize: number, cities: string[]): number {
  cities = cities.map((city) => city.toUpperCase())

  if (cacheSize === 0) {
    return 5 * cities.length
  }

  const cacheArray: string[] = []
  Object.defineProperty(cacheArray, 'length', {
    value: cacheSize,
    writable: false,
  })

  const totalCities = cities.length
  let time = 0

  for (let i = 0; i < totalCities; ++i) {
    const targetIndex = cacheArray.indexOf(cities[i])
    if (targetIndex === -1) {
      // cache miss
      for (let j = cacheSize - 1; j > 0; --j) {
        cacheArray[j] = cacheArray[j - 1]
      }
      time += 5
    } else {
      // cache hit
      for (let j = targetIndex; j > 0; --j) {
        cacheArray[j] = cacheArray[j - 1]
      }
      time += 1
    }
    cacheArray[0] = cities[i]
  }

  return time
}

export { solution as getCachedCities }
