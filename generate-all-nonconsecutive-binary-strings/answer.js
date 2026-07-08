generateNonconsecutive = n => {
	const strings = [];
  let bin;
	for (let i = 0; i < 2**n; i++) {
		bin = i.toString(2);
    console.log(bin)
		if (!bin.includes('11')) {
			strings.push('0'.repeat(n - bin.length) + bin);
		}
	}
	return strings.join(' ')
}

const n = 3;

document.getElementById('ans').textContent = generateNonconsecutive(n);