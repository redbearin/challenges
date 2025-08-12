FizzBuzz = num => {
  if (num % 3 === 0) {
    if (num % 5 === 0) {
      return "FizzBuzz"
    }
    else {
      return "Fizz";
    }
  }
  if (num % 5 === 0) {
    return "Buzz";
  }
  else {
    return num.toString();
  }
}

const num = 15;

document.getElementById('ans').textContent = FizzBuzz(num);