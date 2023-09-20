const lunarSum = (num1, num2) => {
  let longest, shortest;
  let moonSum = '';
  // assign the string of the biggest number 
  // to the longest variable and string of the 
  // smallest variable to the shortest variable
  if (num1 < num2) {
    longest = num2.toString();
    shortest = num1.toString();
  }
  else {
    longest =  num1.toString();
    shortest = num2.toString();
  }
  // go index by index from the back of each 
  // string and compare the numbers
  // the one that is bigger will be included
  // in the moonSum
  for (let i = 1; i <= longest.length; i++) {
    if(shortest.length - i < 0) 
      moonSum = longest[longest.length - i] + moonSum;  
    else {
      if (+longest[longest.length - i] > 
          +shortest[shortest.length - i])
        moonSum = longest[longest.length - i] +
          moonSum;     
      else
        moonSum = shortest[shortest.length - i] +
          moonSum;  
    }      
  }
  return moonSum;
};

const num1 = 20;
const num2 = 140;

document.getElementById('ans').textContent = lunarSum(num1, num2);