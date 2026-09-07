evalFactorial = arr => {
  let num, fact;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    num = +arr[i].slice(0, -1);
    fact = 1;
    for (let j = num; j > 1; j--) {
      fact *= j;
    }
    sum += fact;
  }
  return sum;
}

const arr = ["2!", "3!"];

document.getElementById('ans').textContent = evalFactorial(arr);