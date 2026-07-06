multiSum = (num, ten = 10) => {
  if (ten === 0) {
   return 0;
  }
	return ten * num + multiSum(num, ten - 1);
}

const num = 6;

document.getElementById('ans').textContent = multiSum(num);