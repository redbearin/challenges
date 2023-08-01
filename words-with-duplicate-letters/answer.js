noDuplicateLetters = str => {
  str = str.toLowerCase();
  const strArr = str.replace(/[^a-z ]/g, "").split(' ');
  let sub, dupsRem;
  for (let i = 0; i < strArr.length; i++) {
    sub = strArr[i].split('');
    dupsRem = [... new Set(sub)];
    if (dupsRem.length !== sub.length) {
      return false;
    }
  }
  return true;
}

const str = "Look before you leap.";

document.getElementById('ans').textContent = noDuplicateLetters(str);