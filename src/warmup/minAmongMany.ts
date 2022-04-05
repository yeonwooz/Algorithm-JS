function solution(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number,
  g: number
): number {
  // sort 객체 사용
  const sorted = Array.from(arguments).sort();
  return sorted[0];
}

function solution2(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number,
  g: number
): number {
  // Math.min 사용
  return Math.min(...Array.from(arguments));
}

function solution3(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number,
  g: number
): number {
  const arr = Array.from(arguments);

  // for 문 사용
  let min = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return min;
}

export { solution3 as minAmongMany };
