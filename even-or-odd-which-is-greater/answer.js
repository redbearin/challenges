evenOrOdd = str => {
  let odd = 0;
  let even = 0;
  for (let i = 0; i < str.length; i++) {
    if (+str[i] % 2)
      odd += +str[i];
    else {
      even += +str[i];      
    }
  }
  if (odd === even) {
    return "Even and Odd are the same";
  }
  if (even > odd) {
    return "Even is greater than Odd";
  }
  return "Odd is greater than Even";
}

const str = "23456";

document.getElementById('ans').textContent = evenOrOdd(str);