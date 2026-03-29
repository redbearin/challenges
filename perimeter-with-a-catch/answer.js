perimeter = (l, num) => {
  return (l === 's' ? num * 4 : 6.28 * num);
}

const l = 'c';
const num = 9;

document.getElementById('ans').textContent = perimeter(l, num);