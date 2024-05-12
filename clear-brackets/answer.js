brackets = str => {
  let ctLft = 0;
  let ctRt = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      ctLft++;
    }
    if (str[i] === ')') {
      ctRt++;
    }
    if (ctRt > ctLft) {
      return false
    }
    if (i === str.length - 1 && ctLft++ !== ctRt) {
      return false;
    }
  }
  return true;
}

const str = ")(a-b-45/7*(a-34))";

document.getElementById('ans').textContent = brackets(str);