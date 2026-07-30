countVowels = str => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if(/([aeiouAEIOU])/.test(str[i])) {
      count++;
    }
  }
  return count;
}

const str = "Celebration";

document.getElementById('ans').textContent = countVowels(str);