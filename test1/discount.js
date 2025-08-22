let amount = 120;
let discount;
if (amount >= 100) {
  discount = 20;
} else if (amount >= 50) {
  discount = 10;
} else {
  discount = 0;
}
console.log(`discount: ${discount}%`);
