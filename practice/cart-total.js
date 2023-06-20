function calcCartTotal(cartItemList) {
  // your code here
  if (!Array.isArray(cartItemList) || cartItemList.length === 0) return 0;
  return cartItemList.reduce((total, item) => {
    total = total + item.quantity * item.product.price;
    return total;
  }, 0);
}
