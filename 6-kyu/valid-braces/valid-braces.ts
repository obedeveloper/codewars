const OPENING_FOR_CLOSING = new Map([
  [")", "("],
  ["]", "["],
  ["}", "{"],
]);
​
export function validBraces(braces: string): boolean {
  const stack: string[] = [];
​
  for (const brace of braces) {
    const opening = OPENING_FOR_CLOSING.get(brace);
​
    if (opening === undefined) {
      stack.push(brace);
    } else if (stack.pop() !== opening) {
      return false;
    }
  }
​
  return stack.length === 0;
}