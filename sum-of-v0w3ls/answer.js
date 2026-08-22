sumOfVowels = str => {
  let sum = 0;
  const vowels = ['A', 'E', 'I', 'a', 'e', 'i'];
  const values = {a: 4, e: 3, i: 1, A: 4, E: 3, I: 1};
  for (let x = 0; x < str.length; x++) {
    if (vowels.includes(str[x])) {
      sum += values[str[x]];
    }
  }
  return sum;
}

const str = "I love edabit!";

document.getElementById('ans').textContent = sumOfVowels(str);