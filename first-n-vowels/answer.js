firstNVowels = (str, n) => {
  let vowels = '';
  let count = 0;
  let countReached = false;
  for (let i = 0; i < str.length; i++) {
    if (/[aeiou]/.test(str[i])) {
      count++;
      vowels += str[i];
    }
    if (count === n) {
      countReached = true;
      break;
    }
  }
  if (countReached)
    return vowels;
  else
    return 'Invalid';

}

const str = "hostess";
const n = 5;

document.getElementById('ans').textContent = firstNVowels(str, n);