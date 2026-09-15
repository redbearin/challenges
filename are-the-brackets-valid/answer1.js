validBrackets = str => {
  const bracketPairs =  {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  const openingBrackets = [];
  for (let char of str) {
    if (bracketPairs[char]) {
      const topOpeningBracket = openingBrackets.pop();
      if (topOpeningBracket !== bracketPairs[char]) {
        return false;
      }
    }
    else {
      openingBrackets.push(char);
    }
  }
  return openingBrackets.length === 0;
}

const str = "[({})]";

document.getElementById('ans').textContent = validBrackets(str);