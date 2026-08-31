missingLetter = arr => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].charCodeAt(0) !== 
        arr[i-1].charCodeAt(0) + 1) {
      return (String.fromCharCode(arr[i-1].charCodeAt(0) + 1));
    }
  }
}

const arr = ["a", "b", "c", "e", "f", "g"];

document.getElementById('ans').textContent = missingLetter(arr);
