function isValidWalk(walk) {
  if (walk.length != 10) return false;
  
  const directions = {n: 0, s: 0, e: 0, w: 0};
  walk.forEach(w => directions[w]++);
  
  const {n, s, e, w} = directions;
  return !(n - s) && !(e - w);
}