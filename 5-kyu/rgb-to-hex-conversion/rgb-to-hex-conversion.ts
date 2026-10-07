export function rgb(r: number, g: number, b: number) {
  const hex = (n: number) => {
    if (n <= 0) return "00";
    if (n >= 255) return "FF";
​
    const result = n.toString(16).toUpperCase();
    return result.length == 1 ? `0${result}` : result;
  };
​
  return `${hex(r)}${hex(g)}${hex(b)}`;
}