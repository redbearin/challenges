getSequence = (n1, n2) => JSON.stringify(Array.from({ length:  end - start + 1 }, (_, i) => start + i));

const start = 98
const end = 100;

document.getElementById('ans').textContent = getSequence(start, end);