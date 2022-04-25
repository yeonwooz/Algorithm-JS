/*
< Graph - Adjacency Matrix > 

n: count fo vertices
m: count of edges

*/

function solution(n: number, m: number, arr: number[][]): number {
  let answer = 0
  const graph: number[][] = Array.from(Array(n + 1), () =>
    Array.from(Array(n + 1).fill(0))
  )
  let ch = Array.from({ length: n + 1 }, () => 0)

  for (let [a, b] of arr) {
    graph[a][b] = 1
  }

  let path: number[] = []
  function dfs(v: number) {
    if (v === n) {
      console.log(path)

      answer++
    } else {
      for (let i = 1; i < n + 1; ++i) {
        if (graph[v][i] === 1 && ch[i] === 0 && v !== i) {
          ch[i] = 1
          path.push(i)
          dfs(i)
          ch[i] = 0
          path.pop()
        }
      }
    }
  }

  path.push(1)

  dfs(1)
  return answer
}

export { solution as adjacencyMatrix }
