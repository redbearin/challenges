anaStrStr = (needle, haystack) => {
  const needleArr = needle.split('');
  let index, needleArrCopy;
  for (let i = 0; i < haystack.length; i++) {
    needleArrCopy = [...needleArr];
    if (i + needle.length <= haystack.length) {
      for (let j = i; j <= needle.length; j++) {
        index = needleArrCopy.indexOf(haystack[j]);
        if (index === -1) {
          break;
        }
        else {
          needleArrCopy.splice(index, 1);
        }
      }
    }
    if (!needleArrCopy.length) {
      return true;
    }
  }
  return false;
}

const needle = "sat";  
const haystack = "spatula";

document.getElementById('ans').textContent = anaStrStr(needle, haystack);