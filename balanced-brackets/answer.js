isBalanced = brackets => {
  while (brackets.length > 0) {
    for (let i = 0; i < brackets.length; i++) {
      // reached a right hand bracket
      if (brackets[i] === ')' ||
          brackets[i] === '}' ||
          brackets[i] === ']' ) {
        // brackets match
        if (brackets[i] === ')' && brackets[i - 1] === '(' ||
            brackets[i] === '}' && brackets[i - 1] === '{' ||
            brackets[i] === ']' && brackets[i - 1] === '[') {
          // remove matching brackets
          brackets = brackets.slice(0, i - 1) + brackets.slice(i + 1);
        }
        else
          return false;
      }
    }
  }
  return true;
}
const brackets = "{[([)]]}";

document.getElementById('ans').textContent = isBalanced(brackets);