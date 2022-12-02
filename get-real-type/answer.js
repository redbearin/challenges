realType = item => {
  if (Array.isArray(item))
    return 'array';
  if (item === null)
    return 'null';
  return typeof(item);
}

const item = null;

document.getElementById('ans').textContent = realType(item);