initialize = names => {
  let subArr, str;
  let newArr = [];
  for (let i = 0; i < names.length; i++) {
    subArr = names[i].split(' ');
    str = '';
    for (let j = 0; j < subArr.length; j++) {
      if (j === subArr.length - 1) {
        str += subArr[j][0] + '.';
      }
      else {
        str += subArr[j][0] + '. ';
      }
    }
    newArr.push(str);
  }
  return JSON.stringify(newArr);
}

const names = ["Stephen Hawking"];

document.getElementById('ans').textContent = initialize(names);