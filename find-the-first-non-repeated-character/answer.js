firstNonRepeatedCharacter = str => {
  for (let i = 0; i < str.length; i++) {
    if(str[i] !== str[i-1] && 
        (!str.includes(str[i], i + 1) ||
       i === str.length - 1))  
      {
      return str[i];
    }
  }
  return false;
}

const str = "hheelloo";

document.getElementById('ans').textContent = firstNonRepeatedCharacter(str);