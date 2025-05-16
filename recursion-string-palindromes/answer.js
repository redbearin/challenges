isPalindrome = str => {
  if (str.length <= 1) {
    return true;
  }
  return str[0] !== str[str.length - 1]?
  false:
  isPalindrome(str.slice(1, -1));
}

const str = "abcba";

document.getElementById('ans').textContent = isPalindrome(str); 