validateSpelling = str => {
  const strArr = str.toLowerCase().split('. ');
  const last = strArr.pop().slice(0, -1);
  if (strArr.join('') === last) {
    return true;
  }
  return false;
}

const str = "C. Y. T. O. P. L. A. S. M. Cytoplasm?";

document.getElementById('ans').textContent = 
validateSpelling(str);