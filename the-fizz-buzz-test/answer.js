fizzBuzz = num => {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        arr.push('FizzBuzz');
      }
      else {
        arr.push('Fizz');
      } 
    }
    else if (i % 5 === 0) {
      arr.push('Buzz');
    }
    else {
      arr.push(i);
    }
  }
  return JSON.stringify(arr)
}

const num = 15;

document.getElementById('ans').textContent = fizzBuzz(num);