longestSubstring = digits => {
  let longest = '';
  let sub = '';
  let subInProgress = false;
  for (let i = 1; i < digits.length - 1; i++) {
    if (digits[i] % 2 === 0 
        && digits[i - 1] % 2 ||
        digits[i] % 2 && 
        digits[i - 1] % 2 === 0) {   
      if (i === digits.length - 1) {
        sub += digits[i - 1] + digits[i];
        if (sub.length > longest.length) {
          longest = sub;
        }
      }
      else {
        sub += digits[i - 1];
      } 
      if (sub) {
        subInProgress = true;
      }
    }
    else {
      if (subInProgress) {
        sub += digits[i - 1];
        subInProgress = false;
      }
      if (sub.length > longest.length) {
        longest = sub;
      }
      sub = '';
    }
  }
  return longest;
}

const digits = "721449827599186159274227324466";

document.getElementById('ans').textContent = longestSubstring(digits);