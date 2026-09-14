function humanReadable (seconds) {
  let secs = seconds;
  
  const hrs = Math.floor(secs / 3_600);
  secs %= 3_600;
  
  const mins = Math.floor(secs / 60);
  secs %= 60;
  
  return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`
}
​
function pad(num) {
  if (num >= 10) return num;
  return `0${num}`;
}