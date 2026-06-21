lovesMe = num => {
  let str = '';
  for (let i = 0; i < num; i++) {
    if (i % 2) {
      i === num - 1 ? 
        str += "LOVES ME NOT" :
        str += "Loves me not";
    }
    else {
      i === num - 1 ?
        str += "LOVES ME":
        str += "Loves me";
    }
    if (i !== num - 1) {
      str += ', ';
    }
  }
  return str;
}

const num = 6;

document.getElementById('ans').textContent = lovesMe(num);