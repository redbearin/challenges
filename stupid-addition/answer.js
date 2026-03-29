stupidAddition = (n1, n2) => {
  if (Number.isInteger(n1)) {
    if (Number.isInteger(n2)) {
      return n1.toString() + n2;
    }
    return "null";
  } 
  if (Number.isInteger(n2)) {
    return "null";
  } 
  return +n1 + +n2;
}

const n1 = 1;
const n2 = 2;

document.getElementById('ans').textContent = stupidAddition(n1, n2);