/*
<Breadth-First Search>
Q. Implent breadth-first searching of the given graph.
*/

function solution(n: number) {
  let answer = ''
  const queue = []
  queue.push(1)

  while (queue.length) {
    let v = queue.shift()
    const lastSpace =  v === n ? '' : ' '
    answer += v + lastSpace
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > n) {
        break
      }
      queue.push(nv)
    }
  }

  return answer
}

export { solution as bfsQueue }
