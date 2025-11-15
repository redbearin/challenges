allTruthy = (...args) => args.every(Boolean);

document.getElementById('ans').textContent = allTruthy(5, 4, 3, 2, 1, 0);