alphNum = str => {
  const nums = [];
  for (let i = 0; i < str.length; i++) {
    nums.push(str.charCodeAt(i) - 65)
  }
  return nums.join(' ');
}

const str = "JAVASCRIPT";

document.getElementById('ans').textContent = alphNum(str);