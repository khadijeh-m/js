const input = prompt("enter number");
let grad;
if (input <= 100 && input > 90) {
  grad = "A";
} else if (input <= 90 && input > 80) {
  grad = "B";
} else if (input <= 80 && input > 70) {
  grad = "C";
} else if (input <= 70 && input > 60) {
  grad = "D";
} else if (input <= 60 && input > +0) {
  grad = "E";
} else {
  grad = "nan";
}
console.log(grad);
switch (grad) {
  case "A":
    console.log("good job");
    break;
  case "B":
    console.log("very good");
    break;
  case "C":
    console.log("not bad");
    break;
  case "D":
    console.log("try harder");
    break;
  case "E":
    console.log("failed");
    break;
  default:
    console.log("out of range");
    break;
}
