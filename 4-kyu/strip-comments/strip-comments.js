function solution(text, markers) {
  const lines = text.split('\n');
  
  if (!markers.length) {
    return lines.map(line => line.trimEnd()).join('\n');
  }
  
  return lines.map(line => {
    return markers.reduce((line, marker) => {
      if (!line.includes(marker)) return line.trimEnd();
      return line.slice(0, line.indexOf(marker)).trimEnd();
    }, line);
  }).join('\n');
}