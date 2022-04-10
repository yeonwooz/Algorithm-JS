import solution from '../src/index'

test('concatArrays 을 테스트할 수 있다', () => {
  const arr1 = [1, 3, 5]
  const arr2 = [2, 3, 6, 7, 9]

  const merged = solution.concatArrays(arr1, arr2)
  expect(merged).toEqual([1, 2, 3, 3, 5, 6, 7, 9])
})
