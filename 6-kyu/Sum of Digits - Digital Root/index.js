function digitalRoot(n) {
  const sum = [...String(n)].reduce((sum, s) => sum + +s, 0);
  return String(sum).length == 1 ? sum : digitalRoot(sum);
}
