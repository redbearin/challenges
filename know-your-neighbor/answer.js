plusSign = str => {
  if(/[a-zA-Z]/.test(str[0])) {
    return false;
  }
  for (let i = 1; i < str.length - 1; i++) {
    if (/[a-zA-Z]/.test(str[i])) {
      if (str[i - 1] !== '+' || str[i + 1] !== '+') {
        return false;
      }
    }
  }
  return true;
}
const str = "+f+d+c+#+f+";

document.getElementById('ans').textContent = plusSign(str);