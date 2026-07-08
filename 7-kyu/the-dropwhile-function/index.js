function dropWhile(array, predicate) {
  let index = 0;

  for (const el of array) {
    if (!predicate(el)) break;
    index++;
  }

  return array.slice(index);
}
