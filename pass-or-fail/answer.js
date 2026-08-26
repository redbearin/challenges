const checkPassOrFail = (passMark, score) => score >= passMark ? "pass" : "fail";

const passMark = 40;
const score = 45;

document.getElementById('ans').textContent = checkPassOrFail(passMark, score);