reverseWords = str => {
  return str.trim().split(' ').reverse().join(' ');
}

const str = " the sky is blue";

document.getElementById('ans').textContent = reverseWords(str);