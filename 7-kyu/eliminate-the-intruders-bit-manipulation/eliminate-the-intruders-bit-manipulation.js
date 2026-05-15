function eliminateUnsetBits(number) {
  const onlyOnes = number.replaceAll('0', '');
  return parseInt(onlyOnes, 2) || 0;
}