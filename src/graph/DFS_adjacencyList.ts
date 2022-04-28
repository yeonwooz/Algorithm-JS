/*
<Depth-First search>
노드 개수가 많을 때는 인접행렬(Matrix)보다는 인접리스트(List)로 해결하는 것이 좋다 
(노드가 많을 때는 인접리스트가 시간복잡도, 메모리 효율이 높다)

특정 V(vertex)에서 갈 수 있는 번호들의 리스트들의 배열 만들기 

*/
function solution(n: number, arr: number[][]): number {
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
      for (let i = 0; i < graph[v].length; ++i) {
        // 이번차례의 노드에서 연결된 개수만큼 탐색
        const nextNode = graph[v][i]
        if (ch[nextNode] === 0) {
          ch[nextNode] = 1
          dfs(nextNode)
          ch[nextNode] = 0
        }
      }
    }
  }

  ch[1] = 1
  dfs(1)
  return answer
}

function solution2(n: number, arr: number[][]) {
  // n이 5보다 크면 인접리스트의 배열을 만들어보자 (이 문제에서는 5지만)
  let routes = 0

  // 인접리스트배열
  const listArray = Array.from(Array(n + 1), () => new Array())

  for (let [a, b] of arr) {
    listArray[a].push(b)
  }

  // 방문노드스택
  const vStack: number[] = []

  // 내부함수
  function inner(v: number) {
    if (v === n) {
      routes++
      vStack.pop()
      return
    }

    for (let i = 0; i < listArray[v].length; ++i) {
      const node = listArray[v][i]
      if (!vStack?.includes(node)) {
        vStack.push(node)
        inner(node)
        vStack.pop()
      }
    }
  }

  vStack.push(1)
  inner(1)

  return routes
}

export { solution2 as adjacencyList }
