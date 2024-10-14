countVowels = str => {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = 0; i < str.length; i++) {
    if(/([aeiouAEIOU])/.test(str[i])) {
      count++;
    }
  }
  return count;
}

const str = "Celebration";

document.getElementById('ans').textContent = countVowels(str);