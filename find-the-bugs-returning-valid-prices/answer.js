hasValidPrice = obj => Number.isFinite(obj.price) && obj.price >= 0;

const obj = { "product": "Milk", price: -1 };

document.getElementById('ans').textContent = hasValidPrice(obj);