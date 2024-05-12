const challenge1 = s => {
  return s.slice(0, 5);
};
const challenge2 = s => {
  return s.slice(-5);
};
const challenge3 = s => {
  return s.split('').reverse().join('');
};
const challenge4 = s => {
  return s.slice(0,6).split('').reverse().join('');
};
const challenge5 = s => {
  const lastSeven =  s.slice(-7);
  let newStr = '';
  for (let i = 0; i < lastSeven.length; i++) {
    if (i % 2 === 0)
      newStr += lastSeven[i];
  }
  return newStr;
};

const s = "abcdefghijklmnopqrstuvwxyz";
document.getElementById('ans1').textContent = challenge1(s);
document.getElementById('ans2').textContent = challenge2(s);
document.getElementById('ans3').textContent = challenge3(s);
document.getElementById('ans4').textContent = challenge4(s);
document.getElementById('ans5').textContent = challenge5(s);