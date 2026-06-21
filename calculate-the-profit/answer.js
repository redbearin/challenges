profit = info => Math.round((info.sellPrice - info.costPrice) * info.inventory);

const info = {
  costPrice: 32.67,
  sellPrice: 45.00,
  inventory: 1200
};

document.getElementById('ans').textContent = profit(info);