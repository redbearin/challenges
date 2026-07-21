desAssn = arr => {
  const [first, second, third, ...other] = arr;
  return JSON.stringify(other);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

document.getElementById('ans').textContent = desAssn(arr);