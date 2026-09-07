bucketize = (phrase, n) => {
  const phrArr = phrase.split(' ');
  const newArr = [];
  for (let i = 0; i < phrArr.length * 2 - 1; i++){
    if (i % 2 === 0)
      newArr[i] = phrArr[i/2]
    else {
      newArr[i] = ' ';
    }
  }
  const final = [];
  let str = '';
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === ' ' && str.length === 0 && n === 1) {
      continue;
    }
    else if (newArr[i] === ' ' && str.length === n - 1) {
      final.push(str);
      str = '';
    }
    else if (str.length + newArr[i].length === n) {
      final.push(str + newArr[i]);
      str = '';
    }
    else if (str.length + newArr[i].length < n) { 
      if (!str.length && newArr[i] === ' ') {
        str = '';
      }
      else if (i === newArr.length - 1) {
        final.push(str + newArr[i]);
      }
      else {
        str += newArr[i];
      }
    }
    else if (str.length + newArr[i].length > n){
      final.push(str.trim());

      str = newArr[i];
      if (i === newArr.length - 1) {
        if (str.length < n) {
          final.push(str.trim());
        }
        else {
          return [];
        }
      } 
    }
  }
  return JSON.stringify(final);
}

const phrase = "she sells sea shells by the sea";
const n = 10;

document.getElementById('ans').textContent = bucketize(phrase, n);