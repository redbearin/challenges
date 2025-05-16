polybius = msg => {
  if (msg.charCodeAt(0) > 64 && msg.charCodeAt(0) <  91) {
    const grid = {'a': 11, 'b': 12, 'c': 13, 'd': 14, 'e': 15, 'f': 21, 'g': 22, 'h': 23, 'i': 24, 'j': 24, 'k': 25, 'l': 31, 'm': 32, 'n': 33, 'o': 34, 'p': 35, 'q': 41, 'r': 42, 's': 43, 't': 44, 'u': 45, 'v': 51, 'w': 52, 'x': 53, 'y': 54, 'z': 55};
    msg = msg.toLowerCase().replace(/[':]/g, "");
    console.log(msg)
    let num = '';
    for (let i = 0; i < msg.length; i++) {
      msg[i] === ' ' ?
      num += ' ' :
      num += grid[msg[i]];
    }
    return num;
  } 
  else {
    const grid = {'11': 'a', '12' : 'b', '13': 'c', '14': 'd', '15': 'e', '21': 'f', '22': 'g', '23': 'h', '24': 'i', '25': 'k', '31': 'l', '32': 'm', '33': 'n', '34': 'o', '35': 'p', '41': 'q', '42': 'r', '43': 's', '44': 't', '45': 'u', '51': 'v', '52': 'w', '53': 'x', '54': 'y', '55': 'z'};
    let word = '';
    let i = 0;
    while (i < msg.length - 1) {
      if (msg[i] === ' ') {
        word += ' '
        i++;
      }
      else {
        word += grid[+(msg[i]+ msg[i + 1])];
        i += 2;
      }
    }
    return word;
  } 
}

const msg = "Hi";

document.getElementById('ans').textContent = polybius(msg);