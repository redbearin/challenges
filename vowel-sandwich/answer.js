isVowelSandwich = str => {
  if (str.length !== 3) {
    return false;
  }
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.includes(str[1]) && 
      !vowels.includes(str[0]) && 
      !vowels.includes(str[2])) {
    return true;
  }
  else {
    return false;
  }
}

const str = "cat";

document.getElementById('ans').textContent = isVowelSandwich(str);