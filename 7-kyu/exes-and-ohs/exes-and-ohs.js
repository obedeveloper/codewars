function XO(str) {
  const xs = getLength(str, 'x');
  const os = getLength(str, 'o');
  
  return xs == os;
}
​
function getLength(str, char) {
  return [...str].filter(charA => {
    return charA.toLowerCase() == char.toLowerCase();
  }).length;
}