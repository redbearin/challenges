const decodeMorse = (code, morseToDots) => {
  // break the string on spaces
  const codeArr = code.split(' ');
  console.log(codeArr)
  let str = '';

  for (let i = 0; i < codeArr.length; i++) {
    // skip the second space
    if (codeArr[i] === "" & codeArr[i - 1] === "") 
      continue;
    // add word space
    else if (codeArr[i] === "") 
      str += " ";
    // not a word space
    // add letter, number or punctuation to str
    else 
      str += morseToDots[codeArr[i]];
  }
  return str;
};

const morseToDots = {
  ".-":"A", "-...":"B", "-.-.":"C", "-..":"D", ".":"E", "..-.":"F",
  "--.":"G", "....":"H", "..":"I", ".---":"J", "-.-":"K", ".-..":"L",
  "--":"M", "-.":"N", "---":"O", ".--.":"P", "--.-":"Q", ".-.":"R",
  "...":"S", "-":"T", "..-":"U", "...-":"V", ".--":"W", "-..-":"X",
  "-.--":"Y", "--..":"Z", "-----":"0", ".----":"1", "..---":"2",
  "...--":"3", "....-":"4", ".....":"5", "-....":"6", "--...":"7",
  "---..":"8", "----.":"9", "-.-.--":"!", "   ":" ", "..--..":"?",
  ".-.-.-":".", ".----.":'"', "---...":":", "--..--":", ", " ":""
};

const code = ". -.. .- -... -... .. -   -.-. .... .- .-.. .-.. . -. --. .";

document.getElementById('ans').textContent = decodeMorse(code, morseToDots);