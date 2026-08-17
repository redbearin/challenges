textToNum = str => {
  let numeric = '';
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 64 &&
        str.charCodeAt(i) < 91){
      if (/[ABC]/.test(str[i])) {
        numeric += '2';
      }
      if (/[DEF]/.test(str[i])) {
        numeric += '3';
      }
      if (/[GHI]/.test(str[i])) {
        numeric += '4';
      }
      if (/[JKL]/.test(str[i])) {
        numeric += '5';
      }
      if (/[MNO]/.test(str[i])) {
        numeric += '6';
      }
      if (/[PQRS]/.test(str[i])) {
        numeric += '7';
      }
      if (/[TUV]/.test(str[i])) {
        numeric += '8';
      }
      if (/[WXYZ]/.test(str[i])) {
        numeric += '9';
      }
    }
    else {
      numeric += str[i];
    }
  }
  return numeric;
}
const str = "653-TRY-THIS";

document.getElementById('ans').textContent = textToNum(str);