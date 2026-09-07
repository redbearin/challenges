countVowels = str => {
  const matches = str.match(/[aeiou]/gi);
  return matches === null ? 
         0 : 
         matches.length;
}

const str = "apple";

document.getElementById('ans').textContent = countVowels(str);