countOnes = num => {
  let count = 0;
  const bin = num.toString(2);
  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === '1') {
      count++;
    }
  }
  return count;
}
const num = 999;

document.getElementById('ans').textContent = countOnes(num);