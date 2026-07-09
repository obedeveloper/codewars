function toCamelCase(str) {
  const words = str.split("-").flatMap((word) => word.split("_"));

  return words
    .map((word, index) => {
      if (index == 0) return word;

      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
}
