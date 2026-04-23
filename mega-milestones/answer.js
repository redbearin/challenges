howMuchMega = num => {
  num = Math.abs(num);
  let count = 0;
  const numStr = num.toString();
  if (/e/.test(numStr)){
    const numStrArrBig = numStr.split('e+');
    count = +numStrArrBig[1] - 1;
  }
  else {
    const numStrArr = num.toString().split('.');
    let base = numStrArr[0];
    if (base.length < 3){
      return "not a mega milestone";
    }
    while (base.length > 2) {
      base = base.slice(0, -1);
      count++;
    }
  }
  return 'MEGA '.repeat(count) + 'milestone';
} 

const num = 20850088393226388232424;

document.getElementById('ans').textContent = howMuchMega(num);