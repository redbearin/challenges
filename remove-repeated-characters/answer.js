unrepeated = str => {
  return [...new Set(str.split(''))].join('');
}

const str = "hello";

document.getElementById('ans').textContent = unrepeated(str);