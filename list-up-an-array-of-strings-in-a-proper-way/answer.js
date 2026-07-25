sentence = arr => {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      str += ' and ';
    }
    if (i > 0 && i < arr.length - 1) {
      str += ', ';
    }
    if (/[aeiou]/.test(arr[i][0])){
      str += 'an ' + arr[i];
    }
    else {
      str += 'a ' + arr[i];
    }
  }
  return str[0].toUpperCase() + str.slice(1) + '.';
}

const arr = ["orange", "apple", "pear"];

document.getElementById('ans').textContent = sentence(arr);
