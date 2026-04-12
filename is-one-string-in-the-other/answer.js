overlap = (str1, str2) => {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let shorterStr, longerStr;
  if (str1.length > str2.length) {
    longerStr = str1;
    shorterStr = str2;
  }
  else {
    shorterStr = str1;
    longerStr = str2;
  }
	const longerStrCropped = longerStr.slice(-shorterStr.length);

  if (longerStrCropped === shorterStr) {
    return true;
  }
  else {
    for (let i = 0; i < shorterStr.length; i++) {
      if (shorterStr[i] !== longerStrCropped[i] && 
          shorterStr[i] !== '*' && 
          longerStrCropped[i] !== '*') {
            return false;
      }
    }
  }
  return true;
}

const str1 = "hey";
const str2 = "blahoyr";

document.getElementById('ans').textContent = overlap(str1, str2);