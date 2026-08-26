add = (num1, num2) => {
  if (num1 === undefined || 
      num2 === undefined || 
      num1 === '' || 
      num2 === '' || 
      num1 === null || 
      num2 === null) {
    return "Invalid Operation";
  }
  return (+num1 + +num2).toString();
}
const num1 = '';
const num2 = "111";

document.getElementById('ans').textContent = add(num1, num2);