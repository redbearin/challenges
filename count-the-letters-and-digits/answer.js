countAll = str => {
  let ctNum = 0;
  let ctLtr = 0;
  for (let i = 0; i < str.length; i++) {
    if (/[0-9]/.test(str[i])) {
      ctNum++;
    }
    if ((/[a-zA-Z]/.test(str[i]))) {
      ctLtr++;
    }
  }
  return JSON.stringify({ "LETTERS": ctLtr, "DIGITS": ctNum })
}

const str = "Hello World";

document.getElementById('ans').textContent = countAll(str);