/*
<Bubble Sorting>
Q. Sort the array given as a parameter in ascending order.
(The elements are all natural numbers)

- 'Bubble' means: The list elements with greater value than their surrounding elements “bubble” towards the end of the list.
- 큰수가 맨 끝으로 물거품처럼 밀려가는 방식 
*/

function solution(arr: number[]): void {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  console.log(arr)
}

export { solution as bubbleSort }
