variableValid = str => {
  if (str.split(' ').length > 1 || !/([a-zA-Z])/.test(str[0])) {
    return false;
  }
  return true;
}

const str = "2TimesN";

document.getElementById('ans').textContent = variableValid(str);