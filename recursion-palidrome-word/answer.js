isPalindrome = str => {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1));
}

const str = "madam";

document.getElementById('ans').textContent = isPalindrome(str);