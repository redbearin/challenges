numberLength = num => {
  if(num > Number.MAX_SAFE_INTEGER) {
    num -= 2;
  }
	return BigInt(num).toString().length
}

const num = 9999999999999999;

document.getElementById('ans').textContent = numberLength(num);