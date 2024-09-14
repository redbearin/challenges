editWords = arr => {
  let strArr = arr[0].toUpperCase().split(' ').reverse();
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "") {
      strArr[i] = "-";
    }
    strArr[i] = strArr[i].split('').reverse();
    if (strArr[i].length > 3 && strArr[i] !== "YTIC") {
      strArr[i].splice(Math.floor(strArr[i].length/2), 0, '-');
    }
    strArr[i] = strArr[i].join('');
  }
  return [strArr];
}

const arr = ["New York City"];

document.getElementById('ans').textContent = editWords(arr);