function hamming(a, b) {
    return [...a].filter((char, i) => b.at(i) != char).length;
}