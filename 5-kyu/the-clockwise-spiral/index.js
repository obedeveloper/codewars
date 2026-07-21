function createSpiral(N) {
  if (N < 1 || !Number.isInteger(N)) return [];

  const matrix = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => 0),
  );

  let top = (left = 0);
  let right = (bottom = N - 1);
  let counter = 1;

  while (counter <= N * N) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = counter++;
    }
    top++;

    for (let j = top; j <= bottom; j++) {
      matrix[j][right] = counter++;
    }
    right--;

    for (let k = right; k >= left; k--) {
      matrix[bottom][k] = counter++;
    }
    bottom--;

    for (let l = bottom; l >= top; l--) {
      matrix[l][left] = counter++;
    }
    left++;
  }

  return matrix;
}
