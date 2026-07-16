function toNato(words) {
  return [...words]
    .map((c) => {
      if ([...",.!?"].includes(c)) return c;
      return NATO[c.toUpperCase()];
    })
    .filter((w) => w)
    .join(" ");
}
