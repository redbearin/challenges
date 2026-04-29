dataType = item => {
  const dType = typeof item;
  if (dType === 'object') {
    if (Array.isArray(item)) {
      return Object.prototype.toString.call(item);
    }
  }
  return dType;
}

const item = null;

document.getElementById('ans').textContent = dataType(item);