findTheDifference = (str, mod) => {
  str = str.split('').sort().join('');
  mod = mod.split('').sort().join('');
  for(let i = 0; i < mod.length; i++) {
    if (str[i] !== mod[i]) {
      return mod[i];
    }
  }
}

const str = "ae";
const mod = "aea";

document.getElementById('ans').textContent = findTheDifference("ae", "aea");