function categorySeparator(array) {
  return array
    .split(' ')
    .map((category, id) => ({ categoryName: category, id: `${category}-${id}` }));
}

export default categorySeparator;
