ascending = str => {
  let n = 1;
  let flag = false;
  while (n <= str.length/2) {
    for (let i = n; i < str.length; i += n) {
      if (+str.slice(i-n,i) + 1 !== +str.slice(i, i+n)) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      return true;
    }
    flag = false;
    n++;
  }
  return false;
}

const str = "444445";

document.getElementById('ans').textContent = ascending(str);