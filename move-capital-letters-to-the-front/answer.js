capToFront = str => {
  let upperCase = "";
  let lowerCase = "";

  for (let i = 0; i < str.length; i++) {
    str.charCodeAt(i) > 64 && str.charCodeAt(i) < 90 ?
    upperCase += str[i] :
    lowerCase += str[i];
  }
  return upperCase + lowerCase;
}

const str = "hApPy";

document.getElementById('ans').textContent = capToFront(str); 
