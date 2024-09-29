wordsToSentence = arr => {
	if (arr === null) {
		return "";
	}
  let str = '';
  let flag = false;
  let n = 1;
  for (let i = arr.length - n; i >= 0; i--) {
    if (!arr[i].length) {
      if (!flag) {
        flag = true;
        n++;
      }
      else {
        n++;
      }
    }
    else {
      break;
    }
  }
  for (let i = 0; i < arr.length - n; i++) {
    if (arr[i].length) {
      if (i === 0) {
        str += arr[i];
      }
      else {
        str += ', ' + arr[i];
      }
    }
  }
  if (str === "") {
    if (arr[arr.length -n] === "") {
      return "";
    }
		if (!arr[arr.length -n]) {
			return "";
		}
    else {
      return arr[arr.length -n];
    }
  }
  str += ' and ' + arr[arr.length -n];
  return str;
}

const arr = ["Hello", "", "Bye"];

document.getElementById('ans').textContent = wordsToSentence(arr);