length = str => {
  if (str === '') {
    return 0;
  }
  return 1 + length(str.slice(1));
}

const str = 'apple';

document.getElementById('ans').textContent = length(str);