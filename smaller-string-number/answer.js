smallerNum = (num1, num2) => +num1 <= +num2 ? num1 : num2;

const num1 = "21";
const num2 = "44";

document.getElementById('ans').textContent = smallerNum(num1, num2);