lcm = (num1, num2) => {
  const larger = Math.max(num1, num2); 
  const smaller = Math.min(num1, num2); 
  for (let i = larger; ; i += larger) { 
    if (i % smaller === 0) { 
      return i; 
    } 
  } 
} 

const num1 = 9;
const num2 = 18;

document.getElementById('ans').textContent = lcm(num1, num2);