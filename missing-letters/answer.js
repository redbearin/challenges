getMissingLetters = letters => {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  let missing = '';
  for (let i = 0; i < alpha.length; i++) {
    if (letters.includes(alpha[i]))
      continue;
    missing += alpha[i];
  }
  return missing;
}
const letters = "abc";
document.getElementById('ans').textContent = getMissingLetters(letters);