function findOdd(A) {
  const occurences = new Map();

  A.forEach((num) => {
    if (!occurences.has(num)) {
      occurences.set(num, 0);
    }

    occurences.set(num, occurences.get(num) + 1);
  });

  return [...occurences].find(([key, value]) => value % 2).at(0);
}
