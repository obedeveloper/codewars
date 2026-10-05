const ROMAN_NUMERALS = new Map([
  ["M", 1_000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
] as const);
​
export function solution(num: number) {
  let remaining = num;
  let result = "";
​
  for (const key of [...ROMAN_NUMERALS.keys()]) {
    const n = ROMAN_NUMERALS.get(key)!;
​
    result += key.repeat(remaining / n);
    remaining %= n;
  }
​
  return result;
}