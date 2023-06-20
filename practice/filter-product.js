function filterProducts(productList) {
  // your code here
  const MAX_PRICE = 100000;
  if (productList.length === 0 || !Array.isArray(productList)) return [];
  return productList.filter((item) => item.price > MAX_PRICE);
}
