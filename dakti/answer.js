const dakiti = str => {
  // split the sentence into words
  const strArr = str.split(' ');
  // initialize a new array
  const newArr = [];
  // build indices in the array that will 
  // hold the words in the right order
  for (let i = 0; i < strArr.length; i++) {
    newArr.push('');
  }
  // go word by word through strArr
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr[i].length; j++) {
      // element is a number
      if (!isNaN(strArr[i][j])) {
        // assign the word without the number
        // to the correct position in the strArr
        newArr[+strArr[i][j] - 1] = strArr[i].slice(0, j) + strArr[i].slice(j + 1);
      }
    }
  }
  return newArr.join(' ');
};

const str = "quie3res bebe4r dime1 e5s qu6e qu2e tu7 er8es m9i-bebe";

document.getElementById('ans').textContent = dakiti(str);