sortList = obj => {
  let arr = Object.entries(obj);
  arr.sort().reverse();
  return JSON.stringify(Object.fromEntries(arr));
}

const obj = { c: 100, a: 50, b: 10, d: 50 };

document.getElementById('ans').textContent = sortList(obj);