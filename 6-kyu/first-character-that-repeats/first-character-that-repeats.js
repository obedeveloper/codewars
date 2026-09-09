function firstDup(string) {
  return [...string].find(str => {
    const firstIndex = string.indexOf(str);
    const lastIndex = string.lastIndexOf(str);
    
    return firstIndex != lastIndex
  });
}