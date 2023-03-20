filterValues = items => {
  const coveredItems = {};
  for (key in items) {
    if (items[key] >= 5000)
      coveredItems[key] = items[key];
  }
  return JSON.stringify(coveredItems);
}

const items = {};

document.getElementById('ans').textContent = filterValues(items);