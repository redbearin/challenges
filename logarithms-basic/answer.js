logarithm = (num, ans) => {
  const notAccept = [-Infinity, Infinity, -0, 0, NaN];
  if (notAccept.includes(Math.log(ans) / Math.log(num))) {
    return "Invalid";
  }
  return Math.log(ans) / Math.log(num);
}

const ans = "Hi,".length;
const num = 1;

document.getElementById('ans').textContent = logarithm(num, ans);

