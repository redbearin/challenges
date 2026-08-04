simpleSymbols = str => {
  for (let i = 0; i < str.length; i++) {
    if (/([a-zA-Z])/.test(str[i])) {
      console.log(i)
      if (!/([+])/.test(str[i+1]) || 
          !/([+])/.test(str[i-1])) {
        console.log(i)
        return false;
      }
    }
  }
  return true;
}

const str = "======2+++4+u===+i+";

document.getElementById('ans').textContent = simpleSymbols(str);