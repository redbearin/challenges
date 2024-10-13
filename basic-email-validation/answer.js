validateEmail = str => {
  if (str.indexOf('.') === -1 || 
      str.indexOf('@') === -1) {
    return false;
  }
  if (str[0] === '@') {
    return false;
  }
  if (str.indexOf('.', str.indexOf('@')) > str.indexOf('@')) {
    return true;
  }
  return false;
}

const str = 'bill.gates@microsoft.com';

document.getElementById('ans').textContent = validateEmail(str);