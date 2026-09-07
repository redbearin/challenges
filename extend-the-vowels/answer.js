extendVowels = (str, rep) => {
  if (!Number.isInteger(rep) || rep < 0) {
    return "invalid"
  }
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      newStr += str[i].repeat(rep + 1);
    }
    else {
      newStr += str[i];
    }
  }
  return newStr;
}


const str = "Hello";
const rep = 5;

document.getElementById('ans').textContent = extendVowels(str, rep);