helloWorld = num => {
  if (num % 3 === 0) {
    return num % 5 === 0 ?
    "Hello World" :
    "Hello";
  } 
  if (num % 5 === 0) {
    return "World";
  }
} 

const num = 5;

document.getElementById('ans').textContent = helloWorld(num);