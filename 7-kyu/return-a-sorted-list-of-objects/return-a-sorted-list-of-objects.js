function sortList(sortBy, list) {
  return list.toSorted((a, b) => b[sortBy] - a[sortBy]);
}