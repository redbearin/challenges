messageGlitch = str => {
  let i = 0;
  let finalStr = "";
  let conversion = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h', 9: 'i', 10: 'j', 11: 'k', 12: 'l', 13: 'm', 14: 'n', 15: 'o', 16: 'p', 17: 'q', 18: 'r', 19: 's', 20: 't', 21: 'u', 22: 'v', 23: 'w', 24: 'x', 25: 'y', 26: 'z'};

  while (i < str.length) {
    // a number
    if (str.charCodeAt(i) > 47 && 
        str.charCodeAt(i) < 58) {
      // two digit number
      if (str.charCodeAt(i + 1) > 47 && 
          str.charCodeAt(i + 1) < 58) {
        finalStr += conversion[str[i]+str[i+1]];
        i += 2;
      }
      // single digit number
      else {
        finalStr += conversion[str[i]];
        i++;
      }
    }
    // something other than a number
    else {
      finalStr += str[i];
      i++;
    }
   }
  return finalStr;
}
const str = "P12e1s5 4o14'20 13i3r15w1v5 6i19h i14 20h5 20h9r4 6l15o18 11i20c8e14!"

document.getElementById('ans').textContent = messageGlitch(str);