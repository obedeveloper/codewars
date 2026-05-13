function chain(input, fs) {
  return fs.reduce((r, f) => f(r), input);
}