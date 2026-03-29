isEqual = arr => {
  const str0 = arr[0].toString();
  const str1 = arr[1].toString();
  let sum0 = 0;
  let sum1 = 0;
  for (let i = 0; i < str0.length; i++) {
    sum0 += +str0[i];
  }
  for (let i = 0; i < str1.length; i++) {
    sum1 += +str1[i];
  }
  return sum0 === sum1 ?
  true:
  false;
}

const arr = [105, 42];

document.getElementById('ans').textContent = isEqual(arr);