function toWeirdCase(string) {
  const words = string.split(' ');
  return words.map(word => {
    return [...word].map((char, index) => {
      if (index % 2) return char.toLowerCase();
      return char.toUpperCase();
    }).join('')
  }).join(' ')
}