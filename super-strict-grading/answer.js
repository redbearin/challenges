whoPassed = obj => {
  let strNumArr;
  let flag = false;
  const arr = [];
  for (let key in obj) {
    for (let i = 0; i < obj[key].length; i++) {
      strNumArr = obj[key][i].split('/');
      if (+strNumArr[0]/+strNumArr[1] !== 1) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      arr.push(key);
    }
    flag = false;
  }
  return JSON.stringify(arr.sort());
}

const obj = {
  "John" : ["5/5", "50/50", "10/10", "10/10"],
  "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
  "Adam" : ["8/10", "22/25", "3/5", "5/5"],
  "Barry" : ["3/3", "20/20"]
};

document.getElementById('ans').textContent = whoPassed(obj);

