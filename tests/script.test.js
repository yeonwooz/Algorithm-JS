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
