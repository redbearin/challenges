anagram = (name, words) => {
  name = name.replace(/\s/g, "");
  const nameArr = name.toLowerCase().split('');
  let index;
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      index = nameArr.indexOf(words[i][j]);
      if (index === -1) {
        return false;
      }
      else {
        nameArr[index] = '*';
      }
    }
  }
  return [...new Set(nameArr)].length === 1 ? 
    true : 
    false;
}

const name = "Chris Pratt";
const words = ["chirps", "rat"];

document.getElementById('ans').textContent = anagram(name, words);