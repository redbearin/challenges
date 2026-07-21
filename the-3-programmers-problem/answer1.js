programmers = (p1, p2, p3) => {
  const sortedArr = [p1,p2,p3].sort((a,b) => b - a);
  return sortedArr[0] - sortedArr[2];
}
const p1 = 147;
const p2 = 33;
const p3 = 526;

document.getElementById('ans').textContent = programmers(p1, p2, p3);