export function* fibonacciSequence(): Iterator<bigint> {
  let a = 1n;
  let b = 1n;
​
  yield a;
  yield b;
​
  while (true) {
    const c = a + b;
    [a, b] = [b, c];
    yield c;
  }
}