import solution from '../src/index'

test('concatArrays 을 테스트할 수 있다', () => {
  const arr1 = [1, 3, 5]
  const arr2 = [2, 3, 6, 7, 9]

  const merged = solution.concatArrays(arr1, arr2)
  expect(merged).toEqual([1, 2, 3, 3, 5, 6, 7, 9])
})

test('concatArrays 을 테스트할 수 있다', () => {
  const arr1 = [1, 3, 10]
  const arr2 = [2, 3, 6, 7, 9]

  const merged = solution.concatArrays(arr1, arr2)
  expect(merged).toEqual([1, 2, 3, 3, 6, 7, 9, 10])
})

test('concatArrays 을 테스트할 수 있다', () => {
  const arr1 = [3, 8, 10]
  const arr2 = [2, 3, 6, 7, 9]

  const merged = solution.concatArrays(arr1, arr2)
  expect(merged).toEqual([2, 3, 3, 6, 7, 8, 9, 10])
})

test('vote 를 테스트할 수 있다.', () => {
  const papers = 'BACBACACCBDEDE'
  const candidates = ['A', 'B', 'C', 'D', 'E']
  expect(solution.vote(papers, candidates)).toEqual('C')
})

test('checkAnagram 을 테스트할 수 있다.', () => {
  expect(solution.checkAnagram('AbaAeCe', 'baeeACA')).toEqual('YES')
  expect(solution.checkAnagram('abaCC', 'Caaab')).toEqual('NO')
})

test('getMaxRevenue 를 테스트할 수 있다.', () => {
  expect(
    solution.getMaxRevenue(10, 3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15])
  ).toEqual(56)
})

test('checkParenthesisPairs (괄호쌍 체크) 를 테스트할 수 있다.', () => {
  expect(solution.checkParenthesisPairs('(()(()))(()')).toBe('NO')
  expect(solution.checkParenthesisPairs('((((((')).toBe('NO')
  expect(solution.checkParenthesisPairs(')))))')).toBe('NO')
  expect(solution.checkParenthesisPairs('(()')).toBe('NO')
  expect(solution.checkParenthesisPairs('(())')).toBe('YES')
  expect(solution.checkParenthesisPairs('()()')).toBe('YES')
  expect(solution.checkParenthesisPairs('())(()')).toBe('NO')
})

test('getRemovedDollsCount 를 테스트할 수 있다.', () => {
  expect(
    solution.getRemovedDollsCount(
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 3],
        [0, 2, 5, 0, 1],
        [4, 2, 4, 4, 2],
        [3, 5, 1, 3, 1],
      ],
      [1, 5, 3, 5, 1, 2, 1, 4]
    )
  ).toBe(4)
})

test('selectionSort 를 테스트할 수 있다.', () => {
  expect(solution.selectionSort([13, 5, 11, 7, 23, 15])).toEqual([
    5, 7, 11, 13, 15, 23,
  ])
})

test('bubbleSort 를 테스트할 수 있다.', () => {
  const arr = [13, 5, 11, 7, 23, 15]
  solution.bubbleSort(arr)
  expect(arr).toEqual([5, 7, 11, 13, 15, 23])
})
