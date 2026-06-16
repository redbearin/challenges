returnOnlyInteger = items => JSON.stringify(items.filter((ele) => Number.isInteger(ele)));

const items = [9, 2, "space", "car", "lion", 16];

document.getElementById('ans').textContent = returnOnlyInteger(items);