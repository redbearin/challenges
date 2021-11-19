const replaceNth = (str, num, char1, char2) => {
  // inittialize counter
  let count = 1;
  let finalStr = '';
  // go index by index thru str
  for (let idx = 0; idx < str.length; idx++) {
    // reach the nth char and the num (count)
    if (str[idx] === char1 && count === num) {
      // add replacement character to string
      finalStr += char2;
      // reset counterr
      count = 1;
    }
    else {
      // char is correct character
      if (str[idx] === char1) 
        // increment count
        count++;
      // add the char to string
      finalStr += str[idx];
    }
  }
  return finalStr;
}

const str = "A glittering gem is not enough.";
const num = 0;
const char1 = "0";
const char2 = "-";

document.getElementById('ans').textContent = replaceNth(str, num, char1, char2);