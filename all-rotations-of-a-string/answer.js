const leftRotations = str => {
  const leftRots = [str];
  for (let i = 0; i < str.length - 1; i++) {
    str = str.slice(1) + str.slice(0,1);
    leftRots.push(str);
  }
  console.log(leftRots);
};

const rightRotations = str => {
  const rightRots = [str];
  for (let i = 0; i < str.length - 1; i++) {
    str = str.slice(-1) + str.slice(0, -1);
    rightRots.push(str);
  }
  return JSON.stringify(rightRots);
};

const str1 = "abc";
const str2 = "abcdef";

document.getElementById('ans1').textContent = leftRotations(str1);
document.getElementById('ans2').textContent = rightRotations(str1);
document.getElementById('ans3').textContent = leftRotations(str2);
document.getElementById('ans4').textContent = rightRotations(str2);