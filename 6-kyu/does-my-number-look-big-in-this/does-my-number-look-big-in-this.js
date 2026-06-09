function narcissistic(value) {
  const digits = [...String(value)];
  const numberOfDigits = digits.length;
  
  const sum = digits.reduce((s, d) => {
    return s + (Number(d) ** numberOfDigits);
  }, 0);
  
  return value === sum;
}