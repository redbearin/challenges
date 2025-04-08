getFrequencies = arr =>
  JSON.stringify(arr.reduce((map, item) => {
    map[item] = map[item] + 1 || 1;
    return map;
  }, {}));

const arr = ["A", "B", "A", "A", "A"];

document.getElementById('ans').textContent = getFrequencies(arr);