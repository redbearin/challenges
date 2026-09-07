wormLength = str => {
  if (!str.length) {
    return 'invalid';
  }
  let centimeters = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-') {
      centimeters++;
    }
    else {
      return 'invalid';
    }
  }
  return centimeters * 10 + ' mm.'
}

const str = "----------";

document.getElementById('ans').textContent = wormLength(str);