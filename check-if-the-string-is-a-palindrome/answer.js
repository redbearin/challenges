isPalindrome = str => {
  const culledStr = str.replace(/[^a-zA-Z]/g,"").toLowerCase();
  return culledStr.split('').reverse().join('') === culledStr
}

const str = "A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!";

document.getElementById('ans').textContent = isPalindrome(str);