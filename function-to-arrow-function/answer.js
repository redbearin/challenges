toArrow = str => {
  const strArr = str.split(' ');
  return "const " + strArr[1].replace(/([(])/, ' = (') + ' =>';
}

const str = "function twoArgs(a,b) {}";

document.getElementById('ans').textContent = toArrow(str);