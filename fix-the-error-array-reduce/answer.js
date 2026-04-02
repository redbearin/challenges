reverseString = str => str.split('').reduce((acc, char) => {
    return char + acc;
  }, "");

const str = "hello";

document.getElementById('ans').textContent = reverseString(str);