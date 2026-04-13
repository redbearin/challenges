const ckNum = str => /[0-9]/g.test(str);

const str = "23cc4";

document.getElementById('ans').textContent = ckNum(str);