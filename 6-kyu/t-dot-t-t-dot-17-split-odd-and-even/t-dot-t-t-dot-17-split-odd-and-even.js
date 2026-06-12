function splitOddAndEven(n) {
  const digits = [...String(n)].map(Number);
  let odd = [],
    even = [],
    result = [];
  const lastIndex = digits.length - 1;
​
  for (let index = 0; index <= lastIndex; index++) {
    const digit = digits[index];
​
    if (digit % 2) {
      odd.push(digit);
​
      if (even.length) {
        result.push(even.join(""));
        even = [];
      }
    } else {
      even.push(digit);
​
      if (odd.length) {
        result.push(odd.join(""));
        odd = [];
      }
    }
​
    if (index == lastIndex) {
      result.push(odd.join(""), even.join(""));
    }
  }
​
  return result.map(Number).filter((num) => num);
}
​