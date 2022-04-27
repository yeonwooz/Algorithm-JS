/*
< Graph - Adjacency Matrix > 

n: count fo vertices
arr: connections between each pair of edges
*/

function solution(n: number, arr: number[][]): number {
  let answer = 0
  const graph: number[][] = Array.from(Array(n + 1), () =>
    Array.from(Array(n + 1).fill(0))
  )
  let ch = Array.from({ length: n + 1 }, () => 0)
  // let ch = Array(n + 1).fill(0)

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

  ch[1] = 1
  path.push(1)

  dfs(1)
  return answer
}

/*
n: count fo vertices
arr: connections between each pair of edges
*/

function solution2(n: number, arr: number[][]): number {
  let routes = 0
  // 1. n의 개수를 확인한다.
  // 2. n이 5개 이하 => 인접행렬을 만든다(1행 1열부터 시작해서 n행 n열까지 담을 예정 )
  // 3. 방향그래프인지 무방향그래프인지, 가중치 있는지 확인한다.

  const matrix = Array.from(Array(n + 1), () => new Array()) // 빈배열로 만들어야 첫 인덱스부터 들어감

  for (let [i, j] of arr) {
    matrix[i][j] = 1
  }

  // 4. 방문한 노드 중복을 체크할 visitStack 만든다.
  // 5. 내부함수로 1부터 재귀동작 수행
  let visitStack: number[] = []
  function inner(v: number) {
    if (v === n) {
      routes++
      visitStack.pop()
      return
    }

    for (let i = 1; i < n + 1; ++i) {
      if (matrix[v][i] === 1 && !visitStack?.includes(i)) {
        visitStack.push(i) // 방문스택 추가
        inner(i) // v -> i로 탐색
        visitStack.pop() // 방문이 끝나면 방문스택에서 제거 (v -> i+1 탐색준비)
      }
    }
  }

  visitStack.push(1)
  inner(1)

  return routes
}

export { solution2 as adjacencyMatrix }
