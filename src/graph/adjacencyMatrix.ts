/*
< Graph - Adjacency Matrix > 

n: count fo vertices
m: count of edges

*/

function solution(n: number, m: number, arr: number[][]): number {
  const connections: number[][] = []

  for (let point of arr) {
    const outer = point[0]
    const inner = point[1]
    connections[outer][inner] = 1
  }

  for (let i = 1; i < n+1; ++i) {
      for (let j = 1; j < n+1; ++j) {
          if (connections[i][j]) {
              // ?????
          }
      }
  }
}

export { solution as adjacencyMatrix }
