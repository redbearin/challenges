last = (arr, ct) => {
  if (arr.length < ct) {
    return 'invalid';
  } 
  if (ct === 0) {
    return JSON.stringify([]);
  }
  return JSON.stringify(arr.slice(-ct));
}

const arr = [1, 2, 3, 4, 5];
const ct = 3;

document.getElementById('ans').textContent = last(arr, ct);