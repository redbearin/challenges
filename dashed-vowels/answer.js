dashed = str => {
  const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'O', 'o', 'U', 'u'];
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    vowels.includes(str[i].toLowerCase()) ? 
    newStr += '-' + str[i] + '-' :
    newStr += str[i];
  }
  return newStr;
}

const str = "Edabit";

document.getElementById('ans').textContent = dashed(str);