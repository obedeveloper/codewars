function createPhoneNumber(numbers){
  const pn = phoneNumbers(numbers);
  
  return `(${pn.next().value}) ${pn.next().value}-${pn.next().value}`;
}
​
function* phoneNumbers(numbers) {
  let index = 0;
  
  while(index < 6) {
    yield numbers.slice(index, index + 3).join('');
    index += 3;
  }
  
  yield numbers.slice(index, index + 4).join('')
}