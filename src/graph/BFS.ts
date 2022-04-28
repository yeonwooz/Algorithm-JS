/*
<Breadth-First Search>
Q. Implent breadth-first searching of the given graph.
*/

function solution(n: number, arr: number[][]) {
  const queue = []

  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr[i].length; ++j) {
      queue.push(arr[i][j])
    }
  }

  console.log(queue)
  return queue
}

export { solution as bfsQueue }
