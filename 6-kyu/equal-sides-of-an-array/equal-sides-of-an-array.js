function findEvenIndex(arr) {
  const sum = [(s, n) => s + n, 0];
  const arrSize = arr.length;
  
  for (let i = 0; i < arrSize; i++) {
    const sumLeft = arr.slice(0, i).reduce(...sum);
    const sumRight = arr.slice(i + 1, arr.length).reduce(...sum);
    
    if (sumLeft == sumRight) {
      return i;
    }
  }
  
  return -1;
}