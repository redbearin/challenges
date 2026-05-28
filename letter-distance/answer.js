const letterDistance = (str1, str2) => {
  // find the shortest length
  if (str1.length > str2.length)
    shortest = str2.length
  else 
    shortest = str1.length;
  // initialize sum
  let sum = 0;
  // go ltr by ltr thru strings
  for (let i = 0; i < shortest; i++) {
    // find difference in charcodes for ltrs
    // at same position in strings and add to sum
    sum += Math.abs(str1.charCodeAt(i) - str2.charCodeAt(i));
  }
  // length of strings the same
  if (str1.length === str2.length)
    return sum;
  // length of strings not the same
  // add the string len difference to sume
  sum += Math.abs(str1.length - str2.length);
  return sum;
}

const str1 = "abcde";
const str2 = "bcdef";

document.getElementById('ans').textContent = letterDistance(str1, str2);