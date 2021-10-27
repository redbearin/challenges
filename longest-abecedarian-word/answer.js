const longestAbecedarian = words => {
  let flag = false;
  let final = '';
  for (let i = 0; i < words.length; i++) {
    for (let j = 1; j < words[i].length; j++) {
      if (words[i].charCodeAt(j) < words[i].charCodeAt(j - 1)) {
        flag = true;
        break;
      }
    }
    if (!flag) 
      if (words[i].length > final.length)
        final = words[i];
    else
      flag = false;
  }
  return final;
};

const words = ["one", "two", "three"];

document.getElementById('ans').textContent = longestAbecedarian(words);