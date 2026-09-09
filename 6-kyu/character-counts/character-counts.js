String.prototype.characterCount = function (charsToCount) {
  if (!charsToCount) return;
  
  const chars = [...charsToCount];
  const count = chars.map(char => [...this].filter(c => c == char).length);
  
  return count.length == 1 ? count[0] : count;
};