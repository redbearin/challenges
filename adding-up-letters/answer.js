addLetters = ltrs => {
  if (!ltrs.length) {
    return 'z';
  }
  let sum = 0;
  for (let i = 0; i < ltrs.length; i++) {
    sum += ltrs[i].charCodeAt(0) - 96;
  }
  if (sum % 26) {
    return String.fromCharCode((sum % 26) + 96);
  }
  else {
    return 'z';
  }
}

const ltrs = ["a", "b", "c", "d", "e", "f"];

document.getElementById('ans').textContent = addLetters(ltrs);