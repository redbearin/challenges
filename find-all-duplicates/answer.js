const findDuplicates = values => {
  const seen = new Set();
  const duplicates = new Set();
  for (const val of values) {
    if (seen.has(val)) {
      duplicates.add(val);
    }
    else {
      seen.add(val);
    }
  }
  return JSON.stringify([...duplicates]);
};

const values = [1, 2, 3, 2, 4, 1, 5];

document.getElementById('ans').textContent = findDuplicates(values);