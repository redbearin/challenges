almostPalindrome = str => {
  // differences
  let count = 0;
  // go element by element thru
  // str from both front and back
  for (let i = 0; i < str.length/2; i++) {
    // if elements from both ends of
    // str are not the same increment count
    if (str[i] !== str[str.length - (i + 1)]) 
      count++;
    // more than one difference 
    if (count > 1)
      return false;
  }
  // already a palindrome
  if (count === 0)
    return false;
  // one element from palindrome
  return true;
}

const str = "2134312";

document.getElementById('ans').textContent = almostPalindrome(str);