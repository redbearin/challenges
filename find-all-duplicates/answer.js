const findDuplicates = values => {
  const seen = new Set();
  const dups = new Set();
  for (const val of values) {
    if (seen.has(val)) {
      dups.add(val);
    }
    else {
      seen.add(val);
    }
  }
  return JSON.stringify([...dups]);
};

const values = ['a', 1, 'b', 2, 1];

document.getElementById('ans').textContent = findDuplicates(values);