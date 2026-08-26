progressDays = miles => {
  let count = 0;
  for (let i = 1; i < miles.length; i++) {
    if (miles[i] > miles[i-1])
      count++;
  }
  return count; 
}
const miles = [10, 11, 12, 9, 10];

document.getElementById('ans').textContent = progressDays(miles);
