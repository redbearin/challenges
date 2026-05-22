validDivision = eqn => {
  const eqnArr = eqn.split('/');
  if (eqnArr[1] === '0') {
    return 'invalid';
  }
  if (eqnArr[0] % eqnArr[1]) {
    return false;
  }
  return true;
}

const eqn = "30/25";

document.getElementById('ans').textContent = validDivision(eqn);