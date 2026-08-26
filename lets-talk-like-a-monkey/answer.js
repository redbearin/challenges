monkeyTalk = txt => {
  const arr = txt.toLowerCase().split(' ');
  const monkey = [];
  for (let i = 0; i < arr.length; i++) {
    /[a,e,i,o,u]/.test(arr[0]) ?
      monkey.push('eek'):
      monkey.push('ook');
  }
  const newStr = monkey.join(' ');
  return newStr[0].toUpperCase() + newStr.slice(1) + ".";
}

const txt = "Edabit is Amazing";

document.getElementById('ans').textContent = monkeyTalk(txt);