isValidPhoneNumber = num => {
  if (num.length === 14 &&
      num[0] === '(' &&
      num[4] === ')' &&
      num[5] === ' ' && 
      num[9] === '-') {
        if(num.replace(/[^0-9]/g,'').length === 10) {
          return true;
        }
      }
  return false;
}

const num = "(123) 456-7890";

document.getElementById('ans').textContent = isValidPhoneNumber(num)