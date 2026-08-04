hasValidPrice = item => {
  if (!item ||
      item['price'] < 0 || 
      isNaN(item['price']) || 
      typeof item['price'] === 'string') {
    return false;
  }
  return true;
}

const item = { "product": "Milk", price: 1.50 };

document.getElementById('ans').textContent = hasValidPrice(item);