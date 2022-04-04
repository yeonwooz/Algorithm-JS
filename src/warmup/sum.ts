function solution(n: number): number {
  // 배열을 사용하는 경우
  const arr = [];

  for (let i = 1; i <= n; ++i) {
    arr[i - 1] = i;
  }

  const sum = arr.reduce((prev, cur) => prev + cur, 0);

  return sum;
}

function solution2(n: number): number {
  // 배열을 사용하지 않는 경우
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    ++i;
  }

  return sum;
}

export { solution2 as sum };
