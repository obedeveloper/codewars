function rot13(msg) {
  return [...msg].map((letter) => {
    const isUpperCase = letter.toUpperCase() == letter;
    const lowerLetter = letter.toLowerCase();
    if (lowerLetter < 'a' || lowerLetter > 'z') return letter;
    
    let sub = lowerLetter.charCodeAt(0);
    if (lowerLetter <= 'm') sub += 13;
    else sub -= 13;
    
    const result = String.fromCharCode(sub);
    return isUpperCase ? result.toUpperCase() : result;
  }).join('');
}