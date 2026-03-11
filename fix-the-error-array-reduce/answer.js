calculateSum = txt => {
  return txt.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
}

reverseString = txt => {
  return text.split('').reduce((newStr, char) => char + newStr, "");
}

const txt = "lime";

document.getElementById('ans').textContent = reverseString(txt);
document.getElementById('ans1').textContent = calculateSum(txt);