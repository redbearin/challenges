const splitNCases = (str, parts) => {
  // length of increment
  let incLen = str.length / parts;
  // initialize the substring variable
  let sub;
  // intitialize the final array that will hold 
  // the substrings
  let final = [];
  // go substring length by substring length 
  // through the array
  for (let i = 0; i < str.length; i += incLen) {
    // initialize a new substring
    sub = '';
    // go letter by letter for the length of substr
    for (let j = i; j < i + incLen; j++) {
      sub += str[j];
    }
    // add the substring to the final
    final.push(sub);
  }
  return JSON.stringify(final);
};

const str = "Flavorless" ;
const parts = 1;

document.getElementById('ans').textContent = splitNCases(str, parts);