function likes(names) {
  const {length} = names;
  
  if (!length) {
    return 'no one likes this';
  }
  
  if (length == 1) {
    return `${names[0]} likes this`;
  }
  
  if (length == 2) {
    return `${names.join(' and ')} like this`;
  }
  
  if (length == 3) {
    return `${names.join(' and ').replace(' and', ',')} like this`
  }
  
  const rest = length - 2;
  return `${names.slice(0, 2).join(', ')} and ${rest} others like this`
}