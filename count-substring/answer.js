countSubstring = str => {
  let countSub= 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'A') {
      for (let j = i + 1; j < str.length; j++) {
        if (str[j] === 'X') {
          countSub++;
        }
      }  
    }
  }
  return countSub;
}

const str = "CAXAAYXZA";

document.getElementById('ans').textContent = countSubstring(str);