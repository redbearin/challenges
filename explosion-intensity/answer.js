boomIntensity = num => {
  let build = '';
  if (num < 2) {
    return 'boom';
  }
  build += 'B';
  num % 5 === 0 ?
    build += 'O'.repeat(num) + 'M':
    build += 'o'.repeat(num) + 'm';
  if (num % 2 === 0) {
    build += '!';
  }
  return build;
}

const num = 5;

document.getElementById('ans').textContent = boomIntensity(num);