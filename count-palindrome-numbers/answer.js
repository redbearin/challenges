countPalindromes = (n1, n2) => {
  let count = 0;
  for (let i = n1; i <= n2; i++) {
    const strNum = i.toString();
    if (strNum.split('').reverse().join('') === strNum) {
      count++;
    }
  }
  return count;
}

const n1 = 878;
const n2 = 898;

document.getElementById('ans').textContent = countPalindromes(n1, n2);