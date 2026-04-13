count = arr => {
  const plus = [2, 3, 4, 5, 6];
  const minus = [10, 'J', 'Q', 'K', 'A'];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (minus.includes(arr[i])) {
      sum--;
    }
    else if (plus.includes(arr[i])) {
      sum++;
    }
  }
  return sum;
}

const arr = [5, 9, 10, 3, "J", "A", 4, 8, 5];

document.getElementById('ans').textContent = count(arr);