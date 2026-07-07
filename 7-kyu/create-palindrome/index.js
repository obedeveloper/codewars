function solve(word) {
  const getOptions = (c) => {
    if (c === "a") return [String.fromCharCode(98)];
    if (c === "z") return [String.fromCharCode(121)];
    return [
      String.fromCharCode(c.charCodeAt(0) - 1),
      String.fromCharCode(c.charCodeAt(0) + 1),
    ];
  };

  for (let i = 0, j = word.length - 1; i < j; i++, j--) {
    const leftOpts = getOptions(word[i]);
    const rightOpts = getOptions(word[j]);
    if (!leftOpts.some((l) => rightOpts.includes(l))) return false;
  }

  return true;
}
