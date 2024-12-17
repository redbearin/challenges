split = str => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelStr = '';
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelStr += str[i];
      if (i === str.length - 1 ) {
        arr.push(vowelStr); 
      }
    }
    else {
      if (i === 0) {
        arr.push(str[i]); 
      }
      else {
        if (vowelStr) {
          arr.push(vowelStr);
          vowelStr = '';
        }
        arr.push(str[i]);
      }
    }
  } 
  return JSON.stringify(arr);
}

const str = "beautifully";

document.getElementById('ans').textContent = split(str);