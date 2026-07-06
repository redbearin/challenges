compare_to_100 = x => {
  if (x === 0) return true;
  if (x < 0) return "negative";
  return "positive";
}

const x = 2;

document.getElementById('ans').textContent = compare_to_100(x);