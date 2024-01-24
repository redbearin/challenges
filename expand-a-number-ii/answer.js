expandedForm = num => {
  const splitNumArr = num.toString().split('.');
  let countLeft = splitNumArr[0].length;
  let expanded = '';
  // left of decimal
  for (let i = 0; i < splitNumArr[0].length; i++) {
    if (splitNumArr[0][i] === '0') {
      continue;
    }
    if (i !== 0) {
      expanded += " + ";
    }
    expanded += splitNumArr[0][i] +  '0'.repeat(countLeft - i  - 1);
  }
  // right of decimal
  for (let i = 0; i < splitNumArr[1].length; i++) {
    if (splitNumArr[1][i] != '0') {
      if (expanded) {
        expanded += ' + ';
      }
      expanded += splitNumArr[1][i] + '/' + "1" + '0'.repeat(i + 1);
    }
  }

  return expanded;
}

const num = 0.57;

document.getElementById('ans').textContent = expandedForm(num);