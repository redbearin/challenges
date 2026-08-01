dataType = value => {
  if (value === null) {
    return 'null';
  }
  if (Array.isArray(value)) {
      return 'array';
  }
  if (value instanceof Date) {
    return 'date';
  }
  return typeof value;
}


const value = [1, 2, 3, 4, 5];

document.getElementById('ans').textContent = dataType(value);