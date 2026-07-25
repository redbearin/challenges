simpleEquation = (num1, num2, num3) => {
  if (num1 + num2 === num3) {
    return num1 + "+" + num2 + "=" + num3;
  }
  if (num1 - num2 === num3) {
    return num1 + "-" + num2 + "=" + num3;
  }
  if (num1 / num2 === num3) {
    return num1 + "/" + num2 + "=" + num3;
  }
  if (num1 * num2 === num3) {
    return num1 + "*" + num2 + "=" + num3;
  }
	return "";
}

const num1 = 1;
const num2 = 2;
const num3 = 3;

document.getElementById('ans').textContent = simpleEquation(num1, num2, num3);