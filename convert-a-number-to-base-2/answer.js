binary = decimal => {
	return decimal.toString(2);
}

const decimal = 5;

document.getElementById('ans').textContent = binary(decimal);
