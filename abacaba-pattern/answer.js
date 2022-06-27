abacabaPattern = n => {
	if (n < 2) return 'A';
  const prevPattern = abacabaPattern(n - 1);
  return prevPattern + String.fromCharCode(n + 64) + prevPattern
}

const n = 4;

document.getElementById('ans').textContent = abacabaPattern(n);