threeLetterCollection = str => {
  let sub;
  const arr = [];
  for (let i = 0; i < str.length - 2; i++) {
    sub = '';
    for (let j = i; j < i+3; j++) {
      sub += str[j];
    }
    arr.push(sub)
  }
  return arr.sort();
}

const str = "slap";

document.getElementById('ans').textContent = threeLetterCollection(str);