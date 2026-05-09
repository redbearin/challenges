products = items => {
  const meetsMinPrice = [];
  let key;
  for (key in items) {
    if (items[key] >= 500)
      meetsMinPrice.push(key);
  }
  return JSON.stringify(meetsMinPrice);
}

const items = {"Loafers" : 50, "Vans" : 10, "Crocs" : 20};

document.getElementById('ans').textContent = products(items);