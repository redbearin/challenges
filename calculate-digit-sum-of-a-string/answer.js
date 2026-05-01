digitSum = (str, k) => {
  let newStr = '';
  // cycle thru str until you get to a str
  // that is less than or equal to length
  // of k
  while (str.length > k) {
    // cycle through the str in groups of length k
    for (let i = 0; i < str.length; i += k) {
      let groupingSum = 0;
      // groupingSum digits in a grouping
      for (let j = i; j < i + k; j++) {
        if (str[j] === undefined)
          break;
        groupingSum += +str[j];
      }
      // append groupingSum to build a new str
      newStr += groupingSum;
      // reinitialize groupingSum
      groupingSum = 0;
    }
    // str is now newStr (round complete)
    str = newStr;
    // reintialiize newStr (so you can build again)
    newStr = '';
  }
  return str;
}

str = "11111222223"; 
k = 3;

document.getElementById('ans').textContent = digitSum(str, k)