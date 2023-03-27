oddishOrEvenish = num=> {
  const sum = num.toString().split('').reduce((acc, val) => acc + +val, 0);
  return sum % 2 ? "Oddish" : "Evenish";
}
const num = 694;

document.getElementById('ans').textContent = oddishOrEvenish(num);
