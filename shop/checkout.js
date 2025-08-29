let productName = "Laptop";
let price = 90;
let inStock = true;
let discount = null;
let orderId = 1234567890123456789n;
let shippingCost;
let total;
let quantityNumber;
let paytext;
let quantity = prompt(
  ` we have ${productName} $${price} for each, how many do you want ?`
);
let payment = prompt("choos payment method: credit, paypal, cash");

if (!inStock) {
  console.log(`product ${productName} is out of stock`);
} else {
  quantityNumber = Number(quantity);
  if (!quantityNumber || quantityNumber <= 0) {
    console.log("invalid quantity");
  } else {
    total = price * quantityNumber;
    if (discount) {
      total = total - discount;
    }
    if (total >= 100) {
      shippingCost = 0;
    } else if (total >= 50) {
      shippingCost = 5;
    } else {
      shippingCost = 10;
    }

    switch (payment) {
      case "credit":
        paytext = "paid by credit card";
        break;
      case "paypal":
        paytext = "paid via paypal";
        break;
      case "cash":
        paytext = "cash on delivery";
        break;
    }
    console.log(`order ID : ${orderId}
       product : ${productName}
       quantity : ${quantityNumber}
       total : $${total}
       shiping : $${shippingCost}
       payment : ${paytext}
       status : order confirmed!`);
  }
}
