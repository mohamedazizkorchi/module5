function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
function navigateToRandomCategory() {
  const randomCategory = getRandomElement(categories);
  navigateToCategory(randomCategory.short_name);