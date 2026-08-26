isPositiveDominant = a => {
  a = [...new Set(a)];
  let count = 0;
	let zeroes = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > 0) {
      count++;
    }
		if (a[i] === 0) {
			zeroes++;
		}
  }
  if (count > (a.length - zeroes) / 2) {
    return true;
  }
  return false;
}

const a = [1, 1, 1, 1, -3, -4];

document.getElementById('ans').textContent = isPositiveDominant(a);

