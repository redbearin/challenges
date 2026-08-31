alphabetIndex = str => {
  const nums = [];
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      nums.push(str.charCodeAt(i) - 64);
    }
    else if (/[a-z]/.test(str[i])) {
      nums.push(str.charCodeAt(i) - 96);
    }
  }
  return nums.join(' ');
}

const str = "Wow, does that work?"

document.getElementById('ans').textContent = alphabetIndex(str);