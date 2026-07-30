collect = (str, len) => {
  let subStr = '';
  let countSubStrLtrs = 0;
  const segments = [];
  // 
  for (let i = 0; i < str.length; i++) {
    // increment letters in substring
    countSubStrLtrs++;
    // add letter to substraingg
    subStr += str[i];
    // count of substring letters same as the len
    if (countSubStrLtrs === len) {
      // add the substring to segments arr
      segments.push(subStr);
      // reinitialize the substring 
      subStr = '';
      // reinitialize the count of the substring letters
      countSubStrLtrs = 0;
    }
  }
  // sorted segments
  return JSON.stringify(segments.sort());
}

const str = "pneumonoultramicroscopicsilicovolcanoconiosis";
const len = 15;

document.getElementById('ans').textContent = collect(str, len);