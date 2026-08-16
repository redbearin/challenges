slidingSum = (arr, n, k) => {
  const subs = [];
  for (let i = 0; i < arr.length; i += n) {
    let sub = arr.slice(i, i+n);
    if (sub.reduce((acc,val) => acc + val, 0)) {
      subs.push(sub);
    }
  }
  return JSON.stringify(subs);
}

const arr = [1, 4, 2, 3, 5, 0];
const n = 2;
const k = 5;

document.getElementById('ans').textContent = slidingSum(arr, n, k);