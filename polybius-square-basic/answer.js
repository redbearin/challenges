polybius = msg => {

  if (msg.charCodeAt(0) > 64 && msg.charCodeAt(0) <  91) {
    const grid = {'a': 11, 'b': 12, 'c': 13, 'd': 14, 'e': 15, 'f': 21, 'g': 22, 'h': 23, 'i': 24, 'j': 24, 'k': 25, 'l': 31, 'm': 32, 'n': 33, 'o': 34, 'p': 35, 'q': 41, 'r': 42, 's': 43, 't': 44, 'u': 45, 'v': 51, 'w': 52, 'x': 53, 'y': 54, 'z': 55};
    msg = msg.toLowerCase();
    let num = '';
    for (let i = 0; i < msg.length; i++) {
      num += grid[msg[i]];
    }
    return num;
  }
}
const msg = "Hi";

document.getElementById('ans').textContent = polybius(msg);