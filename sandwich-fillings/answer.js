getFillings = arr => JSON.stringify(arr.slice(1, -1));

const arr = ["bread", "ham", "cheese", "ham", "bread"];

document.getElementById('ans').textContent = getFillings(arr);