isHarshad = num => {
	if (num === 0) {
		return false;
	}
  const strNum = num.toString();
  let sum = 0;
  for (let i = 0; i < strNum.length; i++) {
    sum += +strNum[i];
  }
  return num % sum ? false : true;
}

const num = 15;

document.getElementById('ans').textContent = isHarshad(num);