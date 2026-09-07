howManyTimes = str => {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i) - 96;
  }
  return sum;
}

const str = "abde";

document.getElementById('ans').textContent = howManyTimes("abde");