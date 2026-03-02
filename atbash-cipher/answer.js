const atbash = str => {
  let encrypted = '';
  let code, base;
  // go element by element thru str
  for (let i = 0; i < str.length; i++) {
    // ASCII code for that str element
    code = str.charCodeAt(i);
    // A-M or a-m
    if (code > 64 && code < 78 ||
        code > 96 && code < 110) {
      // capital ltr
      if (code < 78)   
        base = 77;
      // lowercase ltr
      else 
        base = 109;
      
     encrypted += String.fromCharCode(code + 1 + ((base - code) * 2)); 
    }
    // N-Z or n-z
    else if (code > 77 && code < 91 ||
        code > 109 && code < 123) {
      // capital ltr
      if (code < 91)
        base = 78;
      // lowercase ltr
      else
        base = 110;
     encrypted += String.fromCharCode(code - 1 + ((base - code) * 2)); 
    }
    // not a letter
    else
      encrypted += str[i];
  }
  return encrypted;
};

const str = "Christmas is the 25th of December";

document.getElementById('ans').textContent = atbash(str);