function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return vowels
    .map(v => str.split(v).length - 1)
    .reduce((sum, count) => sum + count, 0);
}