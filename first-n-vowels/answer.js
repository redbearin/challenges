firstNVowels = (str, n) => {
  let nVowels = '';
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])){
      count++;
      nVowels += str[i];
      if (count === n) {
        return nVowels;
      }
    }
  }
  return "invalid"
}

const str = "major league";
const n = 5;

document.getElementById('ans').textContent = firstNVowels(str, n);