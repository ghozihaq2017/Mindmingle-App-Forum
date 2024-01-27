function getCategory(threads) {
  let allCaterogies = [];
  let uniqueCategory = [];

  const rawCategory = threads
    .map((thread) => thread.category)
    .filter((category) => category)
    .map((category) => category.split(' '));

  rawCategory.forEach((category) => {
    allCaterogies = [...allCaterogies, ...category].sort();
    uniqueCategory = allCaterogies.filter((checkCategory, i, arr) => checkCategory !== arr[i + 1]);
  });

  const countCategory = uniqueCategory
    .map((category, id) => ({
      id,
      category,
      count: allCaterogies.filter((ctg) => ctg === category).length,
    }))
    .sort((categoryA, categoryB) => categoryB.count - categoryA.count);

  return countCategory;
}

export default getCategory;
