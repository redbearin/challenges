remap = (value, low1, high1, low2, high2) => {
	if (high1 - low1 === 0) {
		return 0;
	}
  const fract = (value - low1)/(high1 - low1);
  return fract * (high2 - low2) + low2;
}

const value = 17;
const low1 = 5;
const high1 = 55;
const low2 = 100;
const high2 = 30;

document.getElementById('ans').textContent = remap(value, low1, high1, low2, high2);