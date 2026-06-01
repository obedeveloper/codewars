function snail(array) {
  const [first, ...rest] = array;
  if (!rest.length) return first;
  return [...first, ...snail(rotate(rest))];
}
​
function rotate(array) {
  const lastIndex = array.at(0).length - 1;
  const result = [];
  
  for (let i = lastIndex; i >= 0; i--) {
    const arr = [];
    
    array.forEach(el => {
      arr.push(el.at(i))
    });
    
    result.push(arr);
  }
  
  return result;
}