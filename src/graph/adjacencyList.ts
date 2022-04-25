/*
노드 개수가 많을 때는 인접행렬(Matrix)보다는 인접리스트(List)로 해결하는 것이 좋다 
(노드가 많을 때는 인접리스트가 시간복잡도, 메모리 효율이 높다)

특정 V(vertex)에서 갈 수 있는 번호들의 리스트들의 배열 만들기 

*/
function solution(n: number, m: number, arr: number[][]): number {
  let answer = 0
  // 다차원배열을 만들 때 new Array 또는 Array.from을 사용해야 새로운 메모리에 저장된다.
  const graph: number[][] = Array.from(Array(n + 1), () => new Array())
  let ch = Array(n + 1).fill(0)

  for (let [a, b] of arr) {
    graph[a].push(b)
  }

  function dfs(v: number) {
    if (v === n) {
      answer++
    } else {
      for (let i = 1; i < n; ++i) {
          for ()
      }
    }
  }
}

export { solution as adjacencyList }
