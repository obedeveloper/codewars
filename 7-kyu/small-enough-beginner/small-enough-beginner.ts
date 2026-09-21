export function smallEnough(a: number[], limit: number): boolean{
  return a.every(num => num <= limit);
}