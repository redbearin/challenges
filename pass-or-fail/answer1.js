const checkPassOrFail = (passMark, score) => {
  if (score >= passMark) {
    return "pass";
  }
  return "fail";
}

const passMark = 40;
const score = 45;

document.getElementById('ans').textContent = checkPassOrFail(passMark, score);