/*
<Insering Sorting>
Q. Sort the array given as a parameter in ascending order.
(The elements are all natural numbers)

Insertion : put the Current Element into the correct position
*/

function solution(arr: number[]): number[] {
  let sorted = arr // 굳이 원본 분리 불필요하여 얕은복사

  for (let i = 0; i < sorted.length; i++) {
    const current = sorted[i]
    let j
    for (j = i - 1; j >= 0; j--) {
      if (sorted[j] > current) {
        // 앞 인덱스에 더 큰 수가 있다면
        sorted[j + 1] = sorted[j] // 뒤로 보낸다
        console.log('a', j + 1, sorted[j + 1])
      } else {
        break
      }
    }
    sorted[j + 1] = current     // 그 다음 수 지정
    console.log('b', j + 1, sorted[j + 1])
  }

  return sorted
}

export { solution as insertingSort }
