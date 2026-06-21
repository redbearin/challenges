removeLeadingTrailing = str => {
  if (/([.])/.test(str)) {
    const strArr = str.split('.');
    const front = strArr[0].replace(/^0+/, '');
    const end = strArr[1].replace(/0+$/, '');
    if (front === '') {
      if (end === '') {
        return '0';
      }
      return '0' + '.' + end;
    }
    if (end === '') {
      return front;
    }
    return front + '.' + end;
  }
  if (str.replace(/^0+/, '') === '') {
    return '0';
  }
  return str.replace(/^0+/, '');
}

const str = "00402.00";

document.getElementById('ans').textContent = removeLeadingTrailing(str);