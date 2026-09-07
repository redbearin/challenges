edabitInString = str => {
  count = 0;
  const word = 'edabit';
  for (let i = 0; i < str.length; i++) {
    if (word[count] === str[i]) {
      count++;
    }
  }
  if (count === 6) {
    return "YES";
  }
  return "NO";
}
const str = "eddaaabt";

document.getElementById('ans').textContent = edabitInString(str);