vowelLinks = str => {
  const strArr = str.split(' ');
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = 1; i < strArr.length; i++) {
    if (vowels.includes(strArr[i][0]) && 
        vowels.includes(strArr[i - 1][strArr[i-1].length - 1]))
      return true;
  }
  return false;
}

const str = "a very large appliance";

document.getElementById('ans').textContent = vowelLinks(str);