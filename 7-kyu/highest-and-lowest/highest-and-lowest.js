function highAndLow(numbers) {
  const nums = numbers.split(' ');
  
  const high = Math.max(...nums);
  const low = Math.min(...nums);
  
  return `${high} ${low}`;
}