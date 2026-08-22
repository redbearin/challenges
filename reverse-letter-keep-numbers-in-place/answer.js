reverse = str => {
  let ltrRev = '';
  let ltrRevNumSame = '';
  // reverse letters only
  for (let i = str.length - 1; i >= 0; i--) {
    if (isNaN(str[i]))
      ltrRev += str[i];
  }
  // replace letters with reversed letters
  // keep numbers same
  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i])) {
      ltrRevNumSame += ltrRev[0];
      ltrRev = ltrRev.slice(1);
    }
    else
      ltrRevNumSame += str[i];
  }
  return ltrRevNumSame;
}
const str = "123a45";

document.getElementById('ans').textContent = reverse(str);