inatorInator = str => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.includes(str[str.length - 1].toLowerCase())) {
    return str + '-inator ' + str.length + '000';
  }
  return str + 'inator ' + str.length + '000';
}

const str = "EvilClone";

document.getElementById('ans').textContent = inatorInator(str);