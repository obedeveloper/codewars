function duplicateCount(text){
  const txt = text.toLowerCase();
  let duplicates = [];
  
  for (const char of txt) {
    const firstIndex = txt.indexOf(char);
    const lastIndex = txt.lastIndexOf(char);
    
    if (firstIndex == lastIndex || duplicates.includes(char)) continue;
    duplicates.push(char);
  }
  
  return duplicates.length;
}