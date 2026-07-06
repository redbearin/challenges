isAutomorphic = n => {
  const strNum = Math.pow(n,2).toString();
  return strNum.slice(-(n.toString().length)) === n.toString() ?
    true:
    false;
}

const n = 25;

document.getElementById('ans').textContent = isAutomorphic(n);

