filterArray = arr => {
  return JSON.stringify(arr.filter(ele => Number.isInteger(ele)));
}

const arr = [1, 2, "a", "b"];

document.getElementById('ans').textContent = filterArray(arr);