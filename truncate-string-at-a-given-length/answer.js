const truncate = (str, num) => {
  // break the string into words
  const strArr = str.split(' ');
  // cut the string based on num
  // of characters and spaces
  const finalStr = str.slice(0, num);
  // break the finalStr into words (part of words)
  let finalStrArr = finalStr.split(' ');
  // if the last element in finalStr is a space
  // remove it from finalStrArr
  if (finalStrArr[finalStrArr.length - 1] === '')
    return finalStrArr.slice(0, -1).join(' ');
  // if the length of the last word in finalStrArr and strArr
  // at the index of the last word in the finalStrArr ARE 
  // NOT the same
  if (finalStrArr[finalStrArr.length - 1].length !== strArr[finalStrArr.length - 1].length) {
    // if the comparison is the first word
    if (finalStrArr.length -1 === 0)
      return '';
    // not the first word
    else 
      return finalStrArr.slice(0, -1).join(' ');
  }
  // if the length of the last word in finalStrArr and strArr
  // at the index of the last word in the finalStrArr ARE 
  // the same
  return finalStrArr.join(' ');
};

const str = "Lorem ipsum dolor sit amet.";
const num = 17;

document.getElementById('ans').textContent = truncate(str, num);