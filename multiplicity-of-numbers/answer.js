multiplicity = arr => {
  const unique = [...new Set(arr)];
  const counts = unique.map(value => [value, arr.filter(ele => ele === value).length]);

  return JSON.stringify(counts);
}

const arr = [1, 5, 4, 3, 2];

document.getElementById('ans').textContent = multiplicity(arr); 